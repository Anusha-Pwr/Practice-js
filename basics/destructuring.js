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

