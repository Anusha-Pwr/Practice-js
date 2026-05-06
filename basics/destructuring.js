/*

Destructuring is JS syntax that allows us to extract values from arrays or objects into variables in a shorter and cleaner way.

*/

let [firstName, surname] = "John Smith".split(' ');
console.log(firstName); // John
console.log(surname);  // Smith

/* it works with any iterable, not only arrays */
/* syntax sugar for calling for...of over the value to the right of = and assigning the values */
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
console.log(a); // "a"
console.log(three); // 3

/* Looping with .entries() */

// let user = {
//     name: "John",
//     age: 30
// };

// for(let [key, value] of Object.entries(user)) {
//     console.log(key, value);
// }
  
// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// for(let [key, value] of user) { // map is iterable
//     console.log(key, value);
// }

let lemon = 2;
let orange = 3;
console.log([orange, lemon]); // [3, 2]

/* To swap variables */
let guest = "Jane";
let admin = "Pete";

[admin, guest]= [guest, admin];

console.log(admin); // Jane
console.log(guest); // Pete

/* swapping more than 2 variables */
// let a = 1, b = 2, c = 3;

// [a, b, c] = [c, a, b];

// console.log(a, b, c); // 3 1 2

/* rest parameter gets the rest using three dots ... */
// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// // rest is an array of items, starting from the 3rd one
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2

/* no error, absent values are undefined */
// let [firstName, surname] = [];

// alert(firstName); // undefined
// alert(surname); // undefined

/* default values can be provided using = */
// default values
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];
/* Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided. */
// runs only prompt for surname
// let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

