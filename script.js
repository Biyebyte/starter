'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`order received! ${this.starterMenu[starterIndex]} 
    and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: 'capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

// OR assignment Operator
// rest1.numGuests = rest1.numGuests || 10; // 20
// rest2.numGuests = rest2.numGuests || 10; // 10
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nulish Assignment Operator '??'
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// //Logical AND assignment operator &&
// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';
rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);

/*
// restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//Nullish values: null and undefined (dosen't include 'NOT' 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//1.) Destructuring

//SPREAD, because we're using it on the RIGHT side of =

const arr = [1, 2, ...[3, 4]];

//REST, because it's on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, ...others);

const [pizza, , Risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFoods);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2.) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'Spinach');

restaurant.orderPizza('mushrooms');

//USE ANY DATA TYPE, RETURN ANYDATA TYPE, SHORT-CIRCUITING
console.log('---- OR----');
console.log(3 || 'Iyebiye');
console.log('' || 'Iyebiye');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 123;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Iyebiye');
console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/////////////////////////////////////////////////////////////////
//The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
console.log(...newMenu);
//Copy Arrays

const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables are; arrays, strings, maps, sets. Not objects
const str = 'Jonas';
const letters = [...str, '', 's.'];
console.log(letters);
console.log(...str);

//Real-World Example
const ingredients = [
  // prompt("let's make pasta! ingredient 1?"),
  // prompt("let's make pasta! ingredient 2?"),
  // prompt("let's make pasta! ingredient 3?"),
];
//  console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
console.log(
  restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
////////////////////////////////
//Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantNmame,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantNmame, hours, tags);
//Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: O, close: c },
} = openingHours;
console.log(O, c);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variable positions
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [secodary, Main];

[main, secondary] = [secondary, main];
console.log(main, secondary);

// let [first, , second] = restaurant.mainMenu;
// console.log(first, second);

// [first, second] = [second, first];

//Receive 2 return values from a function
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//NESTDED DESTRUCTURING
const [i, , [j, k]] = nested; // NESTED: one array inside another
console.log(i, j, k);

//Default Values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/
