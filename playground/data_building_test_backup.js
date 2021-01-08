let data = dataJson3cities;



function buildData(dataSource) {
    let nonCategKeys = ["name", "lat", "long", "country", "population", "score", "COL_index"];
    let builtData = {};

    for (let [cityKey, city] of Object.entries(data)) {
        builtData[cityKey] = {};
    
        let categories = {};
        let attributes = {};
    
        for (let [categoryKey, category] of Object.entries(data[cityKey])) {
    
            // if the key is non-category, then add it to an 'attributes' object
            if (nonCategKeys.indexOf(categoryKey) !== -1) {
                attributes[categoryKey] = category;
            } else {
                //fill up category with items
                let items = {
                    categWeightSum: 0,
                    categValueSum: 0,
                    categSizeSum: 0
                };
    
                for (let [itemKey, item] of Object.entries(data[cityKey][categoryKey])) {
                    
                    let itemData = {
                        nameLong: "",
                        nameShort: "",
                        weight: 0,
                        value: 0,
                        size: 0
                    };

                    regex = /_weight/g;
                    if (itemKey.match(regex) == null) {  // if not matching
                        // fill up itemData
                        itemData.value = item;
    
                        // set itemData as value to corresponding item 
                        items[itemKey] = itemData;
                    }
                }
                categories[categoryKey] = items;
            }
        }
    
        builtData[cityKey]['attribute'] = attributes;
        builtData[cityKey]['category'] = categories;
    }

    return builtData;
}

rebuiltData = buildData(data);

console.log(JSON.stringify(rebuiltData))