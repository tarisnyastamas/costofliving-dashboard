weightsOutput = {
    "name": "nm",
    "children": [
        {
            "name": "Restaurants",
            "category_size": calculateTotal(weights.restaurants),
            "children": [
                {
                    "name": "Meal, Inexpensive Restaurant",
                    "size": weights.restaurants.inexp
                },
                {
                    "name": "Meal for 2 People, Mid-range Restaurant, Three-course",
                    "size": weights.restaurants.mid
                },
                {
                    "name": "McMeal at McDonalds (or Equivalent Combo Meal)",
                    "size": weights.restaurants.mcdonalds
                },
                {
                    "name": "Domestic Beer (0.5 liter draught)",
                    "size": weights.restaurants.domBeer
                },
                {
                    "name": "Imported Beer (0.33 liter bottle)",
                    "size": weights.restaurants.importedBeer
                },
                {
                    "name": "Cappuccino (regular)",
                    "size": weights.restaurants.cappucino
                },
                {
                    "name": "Coke/Pepsi (0.33 liter bottle)",
                    "size": weights.restaurants.coke
                },
                {
                    "name": "Water (0.33 liter bottle)",
                    "size": weights.restaurants.water
                }
            ]
        },
        {
            "name": "Markets",
            "category_size": calculateTotal(weights.markets),
            "children": [
                {
                    "name": "Milk (regular), (1 liter)",
                    "size": weights.markets.milk
                },
                {
                    "name": "Loaf of Fresh White Bread (500g)",
                    "size": weights.markets.loaf
                },
                {
                    "name": "Rice (white), (1kg)",
                    "size": weights.markets.rice
                },
                {
                    "name": "Eggs (regular) (12)",
                    "size": weights.markets.eggs
                },
                {
                    "name": "Local Cheese (1kg)",
                    "size": weights.markets.cheese
                },
                {
                    "name": "Chicken Fillets (1kg)",
                    "size": weights.markets.chicken
                },
                {
                    "name": "Beef Round (1kg)",
                    "size": weights.markets.beef
                },
                {
                    "name": "Apples (1kg)",
                    "size": weights.markets.apple
                },
                {
                    "name": "Banana (1kg)",
                    "size": weights.markets.banana
                },
                {
                    "name": "Oranges (1kg)",
                    "size": weights.markets.orange
                },
                {
                    "name": "Tomato (1kg)",
                    "size": weights.markets.tomato
                },
                {
                    "name": "Potato (1kg)",
                    "size": weights.markets.potato
                },
                {
                    "name": "Onion (1kg)",
                    "size": weights.markets.onion
                },
                {
                    "name": "Lettuce (1 head)",
                    "size": weights.markets.lettuce
                },
                {
                    "name": "Water (1.5 liter bottle)",
                    "size": weights.markets.water
                },
                {
                    "name": "Bottle of Wine (Mid-Range)",
                    "size": weights.markets.wine
                },
                {
                    "name": "Domestic Beer (0.5 liter bottle)",
                    "size": weights.markets.domBeer
                },
                {
                    "name": "Imported Beer (0.33 liter bottle)",
                    "size": weights.markets.impBeer
                },
                {
                    "name": "Cigarettes 20 Pack (Marlboro)",
                    "size": weights.markets.cig
                }
            ]
        },
        {
            "name": "Transportation",
            "category_size": calculateTotal(weights.transportation),
            "children": [
                {
                    "name": "One-way Ticket (Local Transport)",
                    "size": weights.transportation.oneway
                },
                {
                    "name": "Monthly Pass (Regular Price)",
                    "size": weights.transportation.monthly
                },
                {
                    "name": "Taxi Start (Normal Tariff)",
                    "size": weights.transportation.taxistart
                },
                {
                    "name": "Taxi 1km (Normal Tariff)",
                    "size": weights.transportation.taxi1km
                },
                {
                    "name": "Taxi 1hour Waiting (Normal Tariff)",
                    "size": weights.transportation.taxi1h
                },
                {
                    "name": "Gasoline (1 liter)",
                    "size": weights.transportation.gas
                },
                {
                    "name": "Volkswagen Golf",
                    "size": weights.transportation.volkswagen
                },
                {
                    "name": "Toyota Corolla Sedan",
                    "size": weights.transportation.toyota
                }
            ]
        },
        {
            "name": "Utilities",
            "category_size": calculateTotal(weights.utilities),
            "children": [
                {
                    "name": "Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment",
                    "size": weights.utilities.basics
                },
                {
                    "name": "1 min. of Prepaid Mobile Tariff Local (No Discounts or Plans)",
                    "size": weights.utilities.mobile
                },
                {
                    "name": "Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)",
                    "size": weights.utilities.internet
                }
            ]
        },
        {
            "name": "Leisure",
            "category_size": calculateTotal(weights.leisure),
            "children": [
                {
                    "name": "Fitness Club, Monthly Fee for 1 Adult",
                    "size": weights.leisure.fitness
                },
                {
                    "name": "Tennis Court Rent (1 Hour on Weekend)",
                    "size": weights.leisure.tennis
                },
                {
                    "name": "Cinema, International Release, 1 Seat",
                    "size": weights.leisure.cinema
                }
            ]
        },
        {
            "name": "Childcare",
            "category_size": calculateTotal(weights.childcare),
            "children": [
                {
                    "name": "Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child",
                    "size": weights.childcare.kindergarten
                },
                {
                    "name": "International Primary School, Yearly for 1 Child",
                    "size": weights.childcare.primary_school
                }
            ]
        },
        {
            "name": "Clothing",
            "category_size": calculateTotal(weights.clothing),
            "children": [
                {
                    "name": "1 Pair of Jeans (Levis 501 Or Similar)",
                    "size": weights.clothing.jeans
                },
                {
                    "name": "1 Summer Dress in a Chain Store (Zara, H&M, ...)",
                    "size": weights.clothing.dress
                },
                {
                    "name": "1 Pair of Nike Running Shoes (Mid-Range)",
                    "size": weights.clothing.nike
                },
                {
                    "name": "1 Pair of Men Leather Business Shoes",
                    "size": weights.clothing.shoes
                }
            ]
        },
        {
            "name": "Rent",
            "category_size": calculateTotal(weights.rent),
            "children": [
                {
                    "name": "Apartment (1 bedroom) in City Centre",
                    "size": weights.rent.center1
                },
                {
                    "name": "Apartment (1 bedroom) Outside of Centre",
                    "size": weights.rent.outside1
                },
                {
                    "name": "Apartment (3 bedrooms) in City Centre",
                    "size": weights.rent.center3
                },
                {
                    "name": "Apartment (3 bedrooms) Outside of Centre",
                    "size": weights.rent.outside3
                }
            ]
        },
        {
            "name": "Apartment",
            "category_size": calculateTotal(weights.apartment),
            "children": [
                {
                    "name": "Price per Square Meter to Buy Apartment in City Centre",
                    "size": weights.apartment.center
                },
                {
                    "name": "Price per Square Meter to Buy Apartment in Outside of Centre",
                    "size": weights.apartment.outside
                }
            ]
        },
        {
            "name": "Salary",
            "category_size": calculateTotal(weights.salary),
            "children": [
                {
                    "name": "Average Monthly Net Salary (After Tax)",
                    "size": weights.salary.salaryMonthly
                },
                {
                    "name": "Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate",
                    "size": weights.salary.salaryMortgage
                }
            ]
        }
    ]
}