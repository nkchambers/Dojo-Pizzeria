function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    
    return pizza;
}

var p1 = pizzaOven("Deep Dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven ("Hand Tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("Hand Tossed", "marinara", ["mozzarella"], ["pepperoni", "sausage", "bacon", "salami"]);
console.log(p3);

var p4 = pizzaOven("Thin Crust", "bbq", ["mozzarella"], ["chicken", "onions"]);
console.log(p4);
