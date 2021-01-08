let data = dataJson3cities;

let itemNames = {
    restaurants: {
        meal_inexpensive_restaurant: {
            nameLong: "Meal, Inexpensive Restaurant",
            nameShort: "Cheap meal"
        },
        meal_mid_range_restaurant: {
            nameLong: "Meal for 2 People, Mid-range Restaurant, Three-course",
            nameShort: "Three course, 2 people"
        },
        mcdonalds_combo: {
            nameLong: "McMeal at McDonalds (or Equivalent Combo Meal)",
            nameShort: "McDonalds Combo"
        },
        domestic_beer: {
            nameLong: "Domestic Beer (0.5 liter draught)",
            nameShort: "Domestic Beer"
        },
        imported_beer: {
            nameLong: "Imported Beer (0.33 liter bottle)",
            nameShort: "Imported Beer"
        },
        cappucino: {
            nameLong: "Cappuccino (regular)",
            nameShort: "Cappuccino"
        },
        coke_pepsi: {
            nameLong: "Coke/Pepsi (0.33 liter bottle)",
            nameShort: "Coke/Pepsi"
        },
        water: {
            nameLong: "Water (0.33 liter bottle)",
            nameShort: "Water"
        }
    },
    markets: {
        milk: {
            nameLong: "Milk (regular), (1 liter)",
            nameShort: "Milk"
        },
        bread: {
            nameLong: "Loaf of Fresh White Bread (500g)",
            nameShort: "Bread"
        },
        rice: {
            nameLong: "Rice (white), (1kg)",
            nameShort: "Rice"
        },
        eggs: {
            nameLong: "Eggs (regular) (12)",
            nameShort: "Eggs"
        },
        cheese: {
            nameLong: "Local Cheese (1kg)",
            nameShort: "Cheese"
        },
        chicken: {
            nameLong: "Chicken Fillets (1kg)",
            nameShort: "Chicken"
        },
        beef: {
            nameLong: "Beef Round (1kg) (or Equivalent Back Leg Red Meat)",
            nameShort: "Beef"
        },
        apple: {
            nameLong: "Apples (1kg)",
            nameShort: "Apples"
        },
        banana: {
            nameLong: "Banana (1kg)",
            nameShort: "Banana"
        },
        orange: {
            nameLong: "Oranges (1kg)",
            nameShort: "Oranges"
        },
        tomato: {
            nameLong: "Tomato (1kg)",
            nameShort: "Tomato"
        },
        potato: {
            nameLong: "Potato (1kg)",
            nameShort: "Potato"
        },
        onion: {
            nameLong: "Onion (1kg)",
            nameShort: "Onion"
        },
        lettuce: {
            nameLong: "Lettuce (1 head)",
            nameShort: "Lettuce"
        },
        water: {
            nameLong: "Water (1.5 liter bottle)",
            nameShort: "Water"
        },
        wine: {
            nameLong: "Bottle of Wine (Mid-Range)",
            nameShort: "Bottle of Wine"
        },
        beer: {
            nameLong: "Domestic Beer (0.5 liter bottle)",
            nameShort: "Domestic Beer"
        },
        imported_beer: {
            nameLong: "Imported Beer (0.33 liter bottle)",
            nameShort: "Imported Beer"
        },
        cigarettes: {
            nameLong: "Cigarettes 20 Pack (Marlboro)",
            nameShort: "Cigarettes"
        }
    },
    transportation: {
        one_way_ticket: {
            nameLong: "One-way Ticket (Local Transport)",
            nameShort: "One-way Ticket"
        },
        monthly_pass: {
            nameLong: "Monthly Pass (Regular Price)",
            nameShort: "Monthly Pass"
        },
        taxi_start: {
            nameLong: "Taxi Start (Normal Tariff)",
            nameShort: "Taxi Start"
        },
        taxi_1km: {
            nameLong: "Taxi 1km (Normal Tariff)",
            nameShort: "Taxi 1km"
        },
        taxi_1h: {
            nameLong: "Taxi 1hour Waiting (Normal Tariff)",
            nameShort: "Taxi 1h"
        },
        gasoline: {
            nameLong: "Gasoline (1 liter)",
            nameShort: "Gasoline"
        },
        volkswagen: {
            nameLong: "Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)",
            nameShort: "Volkswagen Golf"
        },
        toyota: {
            nameLong: "Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car)",
            nameShort: "Toyota Corolla"
        }
    },
    utilities: {
        basic: {
            nameLong: "Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment	",
            nameShort: "Basic utilities"
        },
        prepaid_mobile: {
            nameLong: "1 min. of Prepaid Mobile Tariff Local (No Discounts or Plans)",
            nameShort: "Prepaid mobile"
        },
        internet: {
            nameLong: "Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)",
            nameShort: "Internet"
        }
    },
    leisure: {
        fitness_club: {
            nameLong: "Fitness Club, Monthly Fee for 1 Adult",
            nameShort: "Gym, monthly fee"
        },
        tennis_court: {
            nameLong: "Tennis Court Rent (1 Hour on Weekend)",
            nameShort: "Tennis (1h)"
        },
        cinema: {
            nameLong: "Cinema, International Release, 1 Seat",
            nameShort: "Cinema"
        }
    },
    childcare: {
        preschool: {
            nameLong: "Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child",
            nameShort: "Kindergarten"
        },
        primary_school: {
            nameLong: "International Primary School, Yearly for 1 Child",
            nameShort: "Primary school"
        }
    },
    clothing: {
        pair_of_jeans: {
            nameLong: "Pair of Jeans (Levis 501 Or Similar)",
            nameShort: "Jeans"
        },
        summer_dress: {
            nameLong: "Summer Dress in a Chain Store (Zara, H&M, ...)",
            nameShort: "Summer Dress"
        },
        running_shoes: {
            nameLong: "Pair of Nike Running Shoes (Mid-Range)",
            nameShort: "Nike shoes"
        },
        business_shoes: {
            nameLong: "Pair of Men Leather Business Shoes",
            nameShort: "Business shoes"
        }
    },
    rent: {
        ap_1bedroom_center: {
            nameLong: "Rent per month for Apartment (1 bedroom) in City Centre",
            nameShort: "Rent, small apartment, center"
        },
        ap_1bedroom_outside: {
            nameLong: "Rent per month for Apartment (1 bedroom) Outside of Centre",
            nameShort: "Rent, small apartment, outside"
        },
        ap_3bedroom_center: {
            nameLong: "Rent per month for Apartment (3 bedrooms) in City Centre",
            nameShort: "Rent, large apartment, center"
        },
        ap_3bedroom_outside: {
            nameLong: "Rent per month for Apartment (3 bedrooms) Outside of Centre",
            nameShort: "Rent, large apartment, outside"
        }
    },
    apartment: {
        buy_apartment_center: {
            nameLong: "Price per Square Meter to Buy Apartment in City Centre",
            nameShort: "Buy apartment center"
        },
        buy_apartment_outside: {
            nameLong: "Price per Square Meter to Buy Apartment Outside of Centre",
            nameShort: "Buy apartment outside"
        }
    },
    salary: {
        net_salary: {
            nameLong: "Average Monthly Net Salary (After Tax)",
            nameShort: "Net Salary"
        },
        mortgage_interest: {
            nameLong: "Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate",
            nameShort: "Mortgage (%)"
        }
    }
}

// itemNames.city.category.clothing.business_shoes['nameLong']

function buildData(data) {
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
                        weight: 2,
                        value: 0,
                        size: 0
                    };

                    regex = /_weight/g;
                    if (itemKey.match(regex) == null) {  // if not matching
                        // fill up itemData
                    
                        itemData.value = item;
                        itemData.nameLong = itemNames[categoryKey][itemKey].nameLong;
                        itemData.nameShort = itemNames[categoryKey][itemKey].nameShort;

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

// console.log(rebuiltData);


