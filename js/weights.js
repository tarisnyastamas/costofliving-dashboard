let weightPointsRemainingSpan = document.querySelector("#weight-points-remaining-span");
let weightsTotal = 0;
let weightsMax = 275;

let restaurantCategWeight = document.querySelector("#restaurant-categ-span");
let restaurantInexp = document.querySelector("#restaurant-meal-inexp");
let restaurantMid = document.querySelector("#restaurant-meal-mid");
let restaurantMcDonalds = document.querySelector("#restaurant-meal-mcdonalds");
let restaurantDomBeer = document.querySelector("#restaurant-meal-domestic-beer");
let restaurantImpBeer = document.querySelector("#restaurant-meal-imported-beer");
let restaurantCappucino = document.querySelector("#restaurant-meal-cappucino");
let restaurantCoke = document.querySelector("#restaurant-meal-coke");
let restaurantWater = document.querySelector("#restaurant-meal-water");

let marketCategWeight = document.querySelector("#market-categ-span");
let marketMilk = document.querySelector("#market-milk");
let marketLoaf = document.querySelector("#market-loaf");
let marketRice = document.querySelector("#market-rice");
let marketEggs = document.querySelector("#market-eggs");
let marketCheese = document.querySelector("#market-cheese");
let marketChicken = document.querySelector("#market-chicken");
let marketBeef = document.querySelector("#market-beef");
let marketApple = document.querySelector("#market-apple");
let marketBanana = document.querySelector("#market-banana");
let marketOrange = document.querySelector("#market-orange");
let marketTomato = document.querySelector("#market-tomato");
let marketPotato = document.querySelector("#market-potato");
let marketOnion = document.querySelector("#market-onion");
let marketLettuce = document.querySelector("#market-lettuce");
let marketWater = document.querySelector("#market-water");
let marketWine = document.querySelector("#market-wine");
let marketDomBeer = document.querySelector("#market-dombeer");
let marketImpBeer = document.querySelector("#market-impbeer");
let marketCig = document.querySelector("#market-cig");

let transportationCategWeight = document.querySelector("#transportation-categ-span");
let transportationOneway = document.querySelector("#transportation-oneway");
let transportationMonthly = document.querySelector("#transportation-monthly");
let transportationTaxiStart = document.querySelector("#transportation-taxi-start");
let transportationTaxi1km = document.querySelector("#transportation-taxi-1km");
let transportationTaxi1h = document.querySelector("#transportation-taxi-1h");
let transportationGas = document.querySelector("#transportation-gas");
let transportationVolkswagen = document.querySelector("#transportation-volkswagen");
let transportationToyota = document.querySelector("#transportation-toyota");

arrTransportationInputs = [transportationOneway, transportationMonthly, transportationTaxiStart, transportationTaxi1km, transportationTaxi1h, transportationGas, transportationVolkswagen, transportationToyota];

let utilsCategWeight = document.querySelector("#utility-categ-span");
let utilsBasics = document.querySelector("#utility-basics");
let utilsMobile = document.querySelector("#utility-mobile");
let utilsInternet = document.querySelector("#utility-internet");

let leisureCategWeight = document.querySelector("#leisure-categ-span");
let leisureFitness = document.querySelector("#leisure-fitness");
let leisureTennis = document.querySelector("#leisure-tennis");
let leisureCinema = document.querySelector("#leisure-cinema");

let childcareCategWeight = document.querySelector("#childcare-categ-span");
let childcareKindergarten = document.querySelector("#childcare-kindergarten");
let childcarePrimarySchool = document.querySelector("#childcare-primary-school");

let clothingCategWeight = document.querySelector("#clothing-categ-span");
let clothingJeans = document.querySelector("#clothing-jeans");
let clothingSummerDress = document.querySelector("#clothing-dress");
let clothingNike = document.querySelector("#clothing-nike");
let clothingShoes = document.querySelector("#clothing-business-shoe");

let rentCategWeight = document.querySelector("#rent-categ-span");
let rent1Center  = document.querySelector("#rent-1-center");
let rent1Outside = document.querySelector("#rent-1-outside");
let rent3Center  = document.querySelector("#rent-3-center");
let rent3Outside = document.querySelector("#rent-3-outside");

let apartmentCategWeight = document.querySelector("#apartment-categ-span");
let apartmentCenter = document.querySelector("#apartment-center");
let apartmentOutside = document.querySelector("#apartment-outside");

let salaryCategWeight = document.querySelector("#salary-categ-span");
let salary = document.querySelector("#salary");
let salaryMortgage = document.querySelector("#salary-mortgage");

let weights = {
    restaurants : {
        inexp: 0,
        mid: 0,
        mcdonalds: 0,
        domBeer: 0,
        importedBeer: 0,
        cappucino: 0,
        coke: 0,
        water: 0
    },
    markets: {
        milk: 0,
        loaf: 0,
        rice: 0,
        eggs: 0,
        cheese: 0,
        chicken: 0,
        beef: 0,
        apple: 0,
        banana: 0,
        orange: 0,
        tomato: 0,
        potato: 0,
        onion: 0,
        lettuce: 0,
        water: 0,
        wine: 0,
        domBeer: 0,
        impBeer: 0,
        cig: 0
    },
    transportation: {
        oneway: 0,
        monthly: 0,
        taxistart: 0,
        taxi1km: 0,
        taxi1h: 0,
        gas: 0,
        volkswagen: 0,
        toyota: 0
    },
    utilities: {
        basics: 0,
        mobile: 0,
        internet: 0
    },
    leisure: {
        fitness: 0,
        tennis: 0,
        cinema: 0
    },
    childcare: {
        kindergarten: 0,
        primary_school: 0
    },
    clothing: {
        jeans: 0,
        dress: 0,
        nike: 0,
        shoes: 0
    },
    rent: {
        center1: 0,
        outside1: 0,
        center3: 0,
        outside3: 0
    },
    apartment: {
        center: 0,
        outside: 0
    },
    salary: {
        salaryMonthly: 0,
        salaryMortgage: 0
    }
}

function flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}

function calculateWeightsTotal(weights) {
    sum = 0;

    flatObj = flattenObject(weights);
    arr = Object.entries(flatObj);

    for (i in arr) {
        sum += parseFloat(arr[i][1]);
    }

    return sum;
}

weightsTotal = calculateWeightsTotal(weights);

function updateRemainingWeights() {
    actualTotal = 275 - calculateWeightsTotal(weights); //ez kell 0 legyen a vegere

    actualTotal = actualTotal.toFixed(2);

    weightPointsRemainingSpan.innerHTML = actualTotal;

    if(actualTotal != 0) {
        weightPointsRemainingSpan.classList.add("text-danger");
        weightPointsRemainingSpan.classList.remove("text-success");
    }

    if(actualTotal == 0) {
        weightPointsRemainingSpan.classList.remove("text-danger");
        weightPointsRemainingSpan.classList.add("text-success");
    }
}
updateRemainingWeights(); // calc total for the first time

function updateWeights(weightsToUpdate, weightData) {

    weightsToUpdate.restaurants.inexp       = weightData.children[0].children[0].size;
    weightsToUpdate.restaurants.mid         = weightData.children[0].children[1].size;
    weightsToUpdate.restaurants.mcdonalds   = weightData.children[0].children[2].size;
    weightsToUpdate.restaurants.domBeer     = weightData.children[0].children[3].size;
    weightsToUpdate.restaurants.importedBeer= weightData.children[0].children[4].size;
    weightsToUpdate.restaurants.cappucino   = weightData.children[0].children[5].size;
    weightsToUpdate.restaurants.coke        = weightData.children[0].children[6].size;
    weightsToUpdate.restaurants.water       = weightData.children[0].children[7].size;

    weightsToUpdate.markets.milk    = weightData.children[1].children[0].size;
    weightsToUpdate.markets.loaf    = weightData.children[1].children[1].size;
    weightsToUpdate.markets.rice    = weightData.children[1].children[2].size;
    weightsToUpdate.markets.eggs    = weightData.children[1].children[3].size;
    weightsToUpdate.markets.cheese  = weightData.children[1].children[4].size;
    weightsToUpdate.markets.chicken = weightData.children[1].children[5].size;
    weightsToUpdate.markets.beef    = weightData.children[1].children[6].size;
    weightsToUpdate.markets.apple   = weightData.children[1].children[7].size;
    weightsToUpdate.markets.banana  = weightData.children[1].children[8].size;
    weightsToUpdate.markets.orange  = weightData.children[1].children[9].size;
    weightsToUpdate.markets.tomato  = weightData.children[1].children[10].size;
    weightsToUpdate.markets.potato  = weightData.children[1].children[11].size;
    weightsToUpdate.markets.onion   = weightData.children[1].children[12].size;
    weightsToUpdate.markets.lettuce = weightData.children[1].children[13].size;
    weightsToUpdate.markets.water   = weightData.children[1].children[14].size;
    weightsToUpdate.markets.wine    = weightData.children[1].children[15].size;
    weightsToUpdate.markets.domBeer = weightData.children[1].children[16].size;
    weightsToUpdate.markets.impBeer = weightData.children[1].children[17].size;
    weightsToUpdate.markets.cig     = weightData.children[1].children[18].size;

    weightsToUpdate.transportation.oneway       = weightData.children[2].children[0].size;
    weightsToUpdate.transportation.monthly      = weightData.children[2].children[1].size;
    weightsToUpdate.transportation.taxistart    = weightData.children[2].children[2].size;
    weightsToUpdate.transportation.taxi1km      = weightData.children[2].children[3].size;
    weightsToUpdate.transportation.taxi1h       = weightData.children[2].children[4].size;
    weightsToUpdate.transportation.gas          = weightData.children[2].children[5].size;
    weightsToUpdate.transportation.volkswagen   = weightData.children[2].children[6].size;
    weightsToUpdate.transportation.toyota       = weightData.children[2].children[7].size;

    weightsToUpdate.utilities.basics    = weightData.children[3].children[0].size;
    weightsToUpdate.utilities.mobile    = weightData.children[3].children[1].size;
    weightsToUpdate.utilities.internet  = weightData.children[3].children[2].size;

    weightsToUpdate.leisure.fitness = weightData.children[4].children[0].size;
    weightsToUpdate.leisure.tennis  = weightData.children[4].children[1].size;
    weightsToUpdate.leisure.cinema  = weightData.children[4].children[2].size;

    weightsToUpdate.childcare.kindergarten   = weightData.children[5].children[0].size;
    weightsToUpdate.childcare.primary_school = weightData.children[5].children[1].size;

    weightsToUpdate.clothing.jeans = weightData.children[6].children[0].size;
    weightsToUpdate.clothing.dress = weightData.children[6].children[1].size;
    weightsToUpdate.clothing.nike  = weightData.children[6].children[2].size;
    weightsToUpdate.clothing.shoes = weightData.children[6].children[3].size;

    weightsToUpdate.rent.center1  = weightData.children[7].children[0].size;
    weightsToUpdate.rent.outside1 = weightData.children[7].children[1].size;
    weightsToUpdate.rent.center3  = weightData.children[7].children[2].size;
    weightsToUpdate.rent.outside3 = weightData.children[7].children[3].size;

    weightsToUpdate.apartment.center  = weightData.children[8].children[0].size;
    weightsToUpdate.apartment.outside = weightData.children[8].children[1].size;

    weightsToUpdate.salary.salaryMonthly = weightData.children[9].children[0].size;
    weightsToUpdate.salary.salaryMortgage = weightData.children[9].children[1].size;

    // ...

}

function updateFormValues() {
    restaurantCategWeight.innerHTML = calculateTotal(weights.restaurants);
    restaurantInexp.value       = weights.restaurants.inexp;
    restaurantMid.value         = weights.restaurants.mid;
    restaurantMcDonalds.value   = weights.restaurants.mcdonalds;
    restaurantDomBeer.value     = weights.restaurants.domBeer;
    restaurantImpBeer.value     = weights.restaurants.importedBeer;
    restaurantCappucino.value   = weights.restaurants.cappucino;
    restaurantCoke.value        = weights.restaurants.coke;
    restaurantWater.value       = weights.restaurants.water;

    marketCategWeight.innerHTML = calculateTotal(weights.markets);
    marketMilk.value    = weights.markets.milk;
    marketLoaf.value    = weights.markets.loaf;
    marketRice.value    = weights.markets.rice;
    marketEggs.value    = weights.markets.eggs; 
    marketCheese.value  = weights.markets.cheese; 
    marketChicken.value = weights.markets.chicken; 
    marketBeef.value    = weights.markets.beef; 
    marketApple.value   = weights.markets.apple; 
    marketBanana.value  = weights.markets.banana; 
    marketOrange.value  = weights.markets.orange; 
    marketTomato.value  = weights.markets.tomato; 
    marketPotato.value  = weights.markets.potato; 
    marketOnion.value   = weights.markets.onion; 
    marketLettuce.value = weights.markets.lettuce; 
    marketWater.value   = weights.markets.water; 
    marketWine.value    = weights.markets.wine; 
    marketDomBeer.value = weights.markets.domBeer;
    marketImpBeer.value = weights.markets.impBeer; 
    marketCig.value     = weights.markets.cig; 

    transportationCategWeight.innerHTML = calculateTotal(weights.transportation);
    transportationOneway.value  = weights.transportation.oneway;
    transportationMonthly.value = weights.transportation.monthly;
    transportationTaxiStart.value   = weights.transportation.taxistart;
    transportationTaxi1km.value = weights.transportation.taxi1km;
    transportationTaxi1h.value  = weights.transportation.taxi1h;
    transportationGas.value = weights.transportation.gas;
    transportationVolkswagen.value  = weights.transportation.volkswagen;
    transportationToyota.value  = weights.transportation.toyota;

    utilsCategWeight.innerHTML  = calculateTotal(weights.utilities); 
    utilsBasics.value   = weights.utilities.basics;
    utilsMobile.value   = weights.utilities.mobile;
    utilsInternet.value = weights.utilities.internet;

    leisureCategWeight.innerHTML    = calculateTotal(weights.leisure);
    leisureFitness.value    = weights.leisure.fitness;
    leisureTennis.value     = weights.leisure.tennis;
    leisureCinema.value     = weights.leisure.cinema;

    childcareCategWeight.innerHTML      = calculateTotal(weights.childcare);
    childcareKindergarten.value     = weights.childcare.kindergarten;
    childcarePrimarySchool.value    = weights.childcare.primary_school;

    clothingCategWeight.innerHTML   = calculateTotal(weights.clothing);
    clothingJeans.value = weights.clothing.jeans;
    clothingSummerDress.value   = weights.clothing.dress;
    clothingNike.value  = weights.clothing.nike;
    clothingShoes.value = weights.clothing.shoes;

    rentCategWeight.innerHTML   = calculateTotal(weights.rent);
    rent1Center.value   = weights.rent.center1;
    rent1Outside.value  = weights.rent.outside1;
    rent3Center.value   = weights.rent.center3;
    rent3Outside.value  = weights.rent.outside3;

    apartmentCategWeight.innerHTML  = calculateTotal(weights.apartment);
    apartmentCenter.value   = weights.apartment.center;
    apartmentOutside.value  = weights.apartment.outside;

    salaryCategWeight.innerHTML = calculateTotal(weights.salary); 
    salary.value    = weights.salary.salaryMonthly;
    salaryMortgage.value    = weights.salary.salaryMortgage;
}


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

let profileSelectorDropdown = document.querySelector("#profile-selector");

let profileWeights = {};

profileSelectorDropdown.addEventListener('change', () => {
    console.log("selection changed to " + profileSelectorDropdown.value);
    
    let selectedProflie = profileSelectorDropdown.value
    profileSpan.innerHTML = selectedProflie;

    let url = 'https://raw.githubusercontent.com/feketebence/costofliving-dashboard/main/data_munging/profile_weights/' + selectedProflie + '_weights.json';

    getJSON(url, function (err, data) {
        if (err != null) {
            alert('Something went wrong: ' + err);
        } else {
            console.log('Your JSON weights result is:  ' + data);
            profileWeights = data;
            console.log(profileWeights);

            // function call to update input field values
            updateWeights(weights, profileWeights);
            updateFormValues();
        }
    });

});

let restaurantCategTotal = 0;
let marketCategTotal = 0;
let transportationCategTotal = 0;
let utilsCategTotal = 0;
let leisureCategTotal = 0;
let childcareCategTotal = 0;
let clothingCategTotal = 0;
let rentCategTotal = 0;
let apartmentCategTotal = 0;
let salaryCategTotal = 0;

function calculateTotal(category) {
    sum = 0;

    entries = Object.entries(category)

    for (i in entries)
        sum += parseFloat(entries[i][1]);

    return sum;
}

// RESTAURANT EVENT LISTENERS
restaurantInexp.addEventListener('change', () => {
    weights.restaurants.inexp = restaurantInexp.value;
    
    restaurantCategTotal = calculateTotal(weights.restaurants)
    console.log("restaurantCategTotal = " + restaurantCategTotal);
    restaurantCategWeight.value = restaurantCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

restaurantMid.addEventListener('change', () => {
    weights.restaurants.mid = restaurantMid.value;
    
    restaurantCategTotal = calculateTotal(weights.restaurants)
    console.log("restaurantCategTotal = " + restaurantCategTotal);
    restaurantCategWeight.value = restaurantCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

restaurantMcDonalds.addEventListener('change', () => {
    weights.restaurants.mcdonalds = restaurantMcDonalds.value;
    
    restaurantCategTotal = calculateTotal(weights.restaurants)
    console.log("restaurantCategTotal = " + restaurantCategTotal);
    restaurantCategWeight.value = restaurantCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

restaurantDomBeer.addEventListener('change', () => {
    weights.restaurants.domBeer = restaurantDomBeer.value;
    
    restaurantCategTotal = calculateTotal(weights.restaurants)
    console.log("restaurantCategTotal = " + restaurantCategTotal);
    restaurantCategWeight.value = restaurantCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

restaurantImpBeer.addEventListener('change', () => {
    weights.restaurants.importedBeer = restaurantImpBeer.value;
    
    restaurantCategTotal = calculateTotal(weights.restaurants)
    console.log("restaurantCategTotal = " + restaurantCategTotal);
    restaurantCategWeight.value = restaurantCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

restaurantCappucino.addEventListener('change', () => {
    weights.restaurants.cappucino = restaurantCappucino.value;
    
    restaurantCategTotal = calculateTotal(weights.restaurants)
    console.log("restaurantCategTotal = " + restaurantCategTotal);
    restaurantCategWeight.value = restaurantCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

restaurantCoke.addEventListener('change', () => {
    weights.restaurants.coke = restaurantCoke.value;
    
    restaurantCategTotal = calculateTotal(weights.restaurants)
    console.log("restaurantCategTotal = " + restaurantCategTotal);
    restaurantCategWeight.value = restaurantCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

restaurantWater.addEventListener('change', () => {
    weights.restaurants.water = restaurantWater.value;
    
    restaurantCategTotal = calculateTotal(weights.restaurants)
    console.log("restaurantCategTotal = " + restaurantCategTotal);

    restaurantCategWeight.value = restaurantCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

// MARKET EVENT LISTENERS
{

marketApple.addEventListener('change', () => {
    weights.markets.apple = marketApple.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

marketBanana.addEventListener('change', () => {
    weights.markets.banana = marketBanana.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

marketBeef.addEventListener('change', () => {
    weights.markets.beef = marketBeef.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

marketCheese.addEventListener('change', () => {
    weights.markets.cheese = marketCheese.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketChicken.addEventListener('change', () => {
    weights.markets.chicken = marketChicken.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketCig.addEventListener('change', () => {
    weights.markets.cig = marketCig.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketDomBeer.addEventListener('change', () => {
    weights.markets.domBeer = marketDomBeer.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketEggs.addEventListener('change', () => {
    weights.markets.eggs = marketEggs.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketImpBeer.addEventListener('change', () => {
    weights.markets.impBeer = marketImpBeer.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketLettuce.addEventListener('change', () => {
    weights.markets.lettuce = marketLettuce.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketLoaf.addEventListener('change', () => {
    weights.markets.loaf = marketLoaf.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketMilk.addEventListener('change', () => {
    weights.markets.milk = marketMilk.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketOnion.addEventListener('change', () => {
    weights.markets.onion = marketOnion.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketOrange.addEventListener('change', () => {
    weights.markets.orange = marketOrange.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketPotato.addEventListener('change', () => {
    weights.markets.potato = marketPotato.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketRice.addEventListener('change', () => {
    weights.markets.rice = marketRice.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketTomato.addEventListener('change', () => {
    weights.markets.tomato = marketTomato.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketWater.addEventListener('change', () => {
    weights.markets.water = marketWater.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


marketWine.addEventListener('change', () => {
    weights.markets.wine = marketWine.value;

    marketCategTotal = calculateTotal(weights.markets);
    marketCategWeight.value = marketCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

}

{
// TRANSPORTATION EVENT LISTENERS
transportationGas.addEventListener('change', () => {
    weights.transportation.gas = transportationGas.value;

    transportationCategTotal = calculateTotal(weights.transportation);
    transportationCategWeight.value = transportationCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

transportationMonthly.addEventListener('change', () => {
    weights.transportation.monthly = transportationMonthly.value;

    transportationCategTotal = calculateTotal(weights.transportation);
    transportationCategWeight.value = transportationCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

transportationOneway.addEventListener('change', () => {
    weights.transportation.oneway = transportationOneway.value;

    transportationCategTotal = calculateTotal(weights.transportation);
    transportationCategWeight.value = transportationCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

transportationTaxi1h.addEventListener('change', () => {
    weights.transportation.taxi1h = transportationTaxi1h.value;

    transportationCategTotal = calculateTotal(weights.transportation);
    transportationCategWeight.value = transportationCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

transportationTaxi1km.addEventListener('change', () => {
    weights.transportation.taxi1km = transportationTaxi1km.value;

    transportationCategTotal = calculateTotal(weights.transportation);
    transportationCategWeight.value = transportationCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

transportationTaxiStart.addEventListener('change', () => {
    weights.transportation.taxistart = transportationTaxiStart.value;

    transportationCategTotal = calculateTotal(weights.transportation);
    transportationCategWeight.value = transportationCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

transportationToyota.addEventListener('change', () => {
    weights.transportation.toyota = transportationToyota.value;

    transportationCategTotal = calculateTotal(weights.transportation);
    transportationCategWeight.value = transportationCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

transportationVolkswagen.addEventListener('change', () => {
    weights.transportation.volkswagen = transportationVolkswagen.value;

    transportationCategTotal = calculateTotal(weights.transportation);
    transportationCategWeight.value = transportationCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

}

// UTILITIES EVENT LISTENERS 
{
utilsBasics.addEventListener('change', () => {
    weights.utilities.basics = utilsBasics.value;

    utilsCategTotal = calculateTotal(weights.utilities);
    utilsCategWeight.value = utilsCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

utilsMobile.addEventListener('change', () => {
    weights.utilities.mobile = utilsMobile.value;

    utilsCategTotal = calculateTotal(weights.utilities);
    utilsCategWeight.value = utilsCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

utilsInternet.addEventListener('change', () => {
    weights.utilities.internet = utilsInternet.value;

    utilsCategTotal = calculateTotal(weights.utilities);
    utilsCategWeight.value = utilsCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

}

// LEISURE EVENT LISTENERS 
{

leisureCinema.addEventListener('change', () => {
    weights.leisure.cinema = leisureCinema.value;

    leisureCategTotal = calculateTotal(weights.leisure);
    leisureCategWeight.value = leisureCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

leisureTennis.addEventListener('change', () => {
    weights.leisure.tennis = leisureTennis.value;

    leisureCategTotal = calculateTotal(weights.leisure);
    leisureCategWeight.value = leisureCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

leisureFitness.addEventListener('change', () => {
    weights.leisure.fitness = leisureFitness.value;

    leisureCategTotal = calculateTotal(weights.leisure);
    leisureCategWeight.value = leisureCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

}

// CHILDCARE EVENT LISTENERS 
{

childcareKindergarten.addEventListener('change', () => {
    weights.childcare.kindergarten = childcareKindergarten.value;

    childcareCategTotal = calculateTotal(weights.childcare);
    childcareCategWeight.value = childcareCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

childcarePrimarySchool.addEventListener('change', () => {
    weights.childcare.primary_school = childcarePrimarySchool.value;

    childcareCategTotal = calculateTotal(weights.childcare);
    childcareCategWeight.value = childcareCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

}

// CLOTHING EVENT LISTENERS
{

clothingJeans.addEventListener('change', () => {
    weights.clothing.jeans = clothingJeans.value;

    clothingCategTotal = calculateTotal(weights.clothing);
    clothingCategWeight.value = clothingCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

clothingNike.addEventListener('change', () => {
    weights.clothing.nike = clothingNike.value;

    clothingCategTotal = calculateTotal(weights.clothing);
    clothingCategWeight.value = clothingCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

clothingShoes.addEventListener('change', () => {
    weights.clothing.shoes = clothingShoes.value;

    clothingCategTotal = calculateTotal(weights.clothing);
    clothingCategWeight.value = clothingCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

clothingSummerDress.addEventListener('change', () => {
    weights.clothing.dress = clothingSummerDress.value;

    clothingCategTotal = calculateTotal(weights.clothing);
    clothingCategWeight.value = clothingCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

}

// RENT EVENT LISTENERS
{

rent1Center.addEventListener('change', () => {
    weights.rent.center1 = rent1Center.value;

    rentCategTotal = calculateTotal(weights.rent);
    rentCategWeight.value = rentCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


rent3Center.addEventListener('change', () => {
    weights.rent.center3 = rent3Center.value;

    rentCategTotal = calculateTotal(weights.rent);
    rentCategWeight.value = rentCategTotal;
    updateRemainingWeights();
    updateFormValues();
});


rent1Outside.addEventListener('change', () => {
    weights.rent.outside1 = rent1Outside.value;

    rentCategTotal = calculateTotal(weights.rent);
    rentCategWeight.value = rentCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

rent3Outside.addEventListener('change', () => {
    weights.rent.outside3 = rent3Outside.value;

    rentCategTotal = calculateTotal(weights.rent);
    rentCategWeight.value = rentCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

}

//APARTMENT EVENT LISTENERS
{

apartmentCenter.addEventListener('change', () => {
    weights.apartment.center = apartmentCenter.value;

    apartmentCategTotal = calculateTotal(weights.apartment);
    apartmentCategWeight.value = apartmentCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

apartmentOutside.addEventListener('change', () => {
    weights.apartment.outside = apartmentOutside.value;

    apartmentCategTotal = calculateTotal(weights.apartment);
    apartmentCategWeight.value = apartmentCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

}

//SALARY EVENT LISTENERS
{

salary.addEventListener('change', () => {
    weights.salary.salaryMonthly = salary.value;

    salaryCategTotal = calculateTotal(weights.salary);
    salaryCategWeight.value = salaryCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

salaryMortgage.addEventListener('change', () => {
    weights.salary.salaryMortgage = salaryMortgage.value;

    salaryCategTotal = calculateTotal(weights.salary);
    salaryCategWeight.value = salaryCategTotal;
    updateRemainingWeights();
    updateFormValues();
});

}




// console.log(weightPointsRemainingSpan.innerHTML);
