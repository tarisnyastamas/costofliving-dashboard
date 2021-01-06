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
        loaf: 0
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

    weightsToUpdate.restaurants.inexp = weightData.children[0].children[0].size;
    weightsToUpdate.restaurants.mid = weightData.children[0].children[1].size;
    weightsToUpdate.restaurants.mcdonalds = weightData.children[0].children[2].size;
    weightsToUpdate.restaurants.domBeer = weightData.children[0].children[3].size;
    weightsToUpdate.restaurants.importedBeer= weightData.children[0].children[4].size;
    weightsToUpdate.restaurants.cappucino = weightData.children[0].children[5].size;
    weightsToUpdate.restaurants.coke = weightData.children[0].children[6].size;
    weightsToUpdate.restaurants.water = weightData.children[0].children[7].size;
    // ...

}

function updateFormValues() {
    restaurantCategWeight.innerHTML = calculateTotal(weights.restaurants)
    restaurantInexp.value       = weights.restaurants.inexp;
    restaurantMid.value         = weights.restaurants.mid;
    restaurantMcDonalds.value   = weights.restaurants.mcdonalds;
    restaurantDomBeer.value     = weights.restaurants.domBeer;
    restaurantImpBeer.value     = weights.restaurants.importedBeer;
    restaurantCappucino.value   = weights.restaurants.cappucino;
    restaurantCoke.value        = weights.restaurants.coke;
    restaurantWater.value       = weights.restaurants.water;
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

let restaurantCategTotal = 0

function calculateTotal(category) {
    sum = 0;

    entries = Object.entries(category)

    for (i in entries)
        sum += parseFloat(entries[i][1]);

    return sum;
}

// change RESTAURANT category weight when input is changed
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









// console.log(weightPointsRemainingSpan.innerHTML);
