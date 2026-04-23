/*

Map is a collection of keyed data items, just like an object. Main difference is that map allows keys of any type.

Methods: 
new Map(): creates the map
map.set(key, value): stores the value by key
map.get(key): gets the value by key
map.has(key): returns boolean
map.delete(key): deletes the key/value pair by the key
map.clear(): removes everything from the map

Property: 
map.size: returns the current element count

to test keys for equivalence, map uses roughly the same algorithm as strict equality (===)

Every map.set call returns the map itself, so we can chain the calls:
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

*/

/* Maps can also have objects as keys */

let john = {name: "John"};
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john));

console.log(String({}));

let myMap = new Map();
myMap.set({}, 1);
myMap.set({}, 2);
console.log(myMap.get({})); // undefined
console.log(myMap.size); // 2

/* 
Iteration over map: 3 methods to loop over a map

map.keys() => returns an iterable for keys
map.values() => returns an iterable for values
map.entries() => returns an iterable for entries [key, value], used by default in for...of

map has a built-in forEach method just like arrays:

*/

let recipeMap = new Map([
    ['cucumber', 350],
    ['tomatoes', 150],
    ['onion', 100]
]);

for(let key of recipeMap.keys()) {
    console.log(key);
}

for(let value of recipeMap.values()) {
    console.log(value);
}

for(let entry of recipeMap) {
    console.log(entry);
}

recipeMap.forEach((value, key, recipeMap) => {
    console.log(key, value);
});

/* 

Map from object: Object.entries()
                 => returns the array of key/value pairs

*/

// const obj = {
//     name: "John",
//     age: 30
// };

// const res = Object.entries(obj);
// console.log(res);
// const map = new Map(res);
// console.log(map);

/*

Object from map: Object.fromEntries()
                 => returns an object
                 => expects an iterable object as argument

*/

const prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

console.log(prices); // {banana: 1, orange: 2, meat: 4}

let priceMap = new Map();
priceMap.set('banana', 1);
priceMap.set('orange', 2);
priceMap.set('meat', 4);

const myObj = Object.fromEntries(priceMap.entries());
console.log(myObj); // {banana: 1, orange: 2, meat: 4}

/* question 1 */

let map = new Map();

map.set("name", "John");

let keys = map.keys();

const keysArr = Array.from(keys);
keysArr.push("more");
console.log(keysArr);

// Error: keys.push is not a function
// keys.push("more");

/* question 2 */

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

    const map = new Map();

    for(let i=0; i<arr.length; i++) {
        map.set(arr[i].toLowerCase().split("").sort().join(""), arr[i]);
    }
    
    console.log(Array.from(map.values()));

}

 aclean(arr) ;
