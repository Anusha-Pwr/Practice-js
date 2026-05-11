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

/* 

Object destructuring: let {var1, var2} = {var1:…, var2:…}

* If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w,
  then we can set the variable name using a colon:

  // { sourceProperty: targetVariable }
  let {width: w, height: h, title} = options;

* rest can be used just like with arrays. here, the rest will be the object with the rest of the properties.

*/

/*

Smart function paramteres: We can pass parameters as an object, and the function immediately destructurizes them into variables:

The full syntax is:

function({
  incomingProperty: varName = defaultValue
  ...
})

*/

// we pass object to function
// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
//   };
  
//   // ...and it immediately expands it to variables
//   function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     // title, items – taken from options,
//     // width, height – defaults used
//     alert( `${title} ${width} ${height}` ); // My Menu 200 100
//     alert( items ); // Item1, Item2
//   }
  
//   showMenu(options);
  
/*

When using destructuring in function parameters, we set the whole parameter to {} by default to avoid errors when no argument is passed.

function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  console.log(title, width, height);
}

const { title = "Menu", width = 100, height = 200 } = {}; // destructuring happens like this now
// if no argument, use an empty object by default

showMenu();

*/

/* question 1 */

let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin=false} = user;

console.log(name);
console.log(age);
console.log(isAdmin);

/* question 2 */

function topSalary(salaries={}) {
  if(Object.keys(salaries).length===0) return null; // if the object is empty

  let top = Number.MIN_SAFE_INTEGER, person;
  for (let [name, salary] of Object.entries(salaries)) {
      if(salary>top) {
          top = salary;
          person = name;
      }
  }

  return person;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries)); // Pete
console.log(topSalary()); // null

/* practice */

// const myName = { firstName: "Tobi", lastName: "Sofela" };
// const bio = { ...myName, firstName: "Oluwatobi", website: "codesweetly.com" };

// console.log(bio);

// const myName = { firstName: "Tobi", lastName: "Sofela" };
// const bio = { firstName: "Oluwatobi", website: "codesweetly.com", ...myName };

// console.log(bio);

                                       /* Spread Operator */

/* Spread operator helps expand iterables into individual elements */

// const myName = ["Sofela", "is", "my"];
// console.log(...myName); // Sofela is my
// const aboutMe = ["Oluwatobi", ...myName, "name."];

// console.log(aboutMe); // ['Oluwatobi', 'Sofela', 'is', 'my', 'name.']

// const aboutMe = ["Oluwatobi", myName, "name."]
// console.log(aboutMe); // ['Oluwatobi', Array(3), 'name.']


