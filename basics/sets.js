/*

Set: * it stores a "set of values" (without keys) where each value occurs only once
     * it can store values of any type (objects or primitives)
     * uniqueness of values is determined using strict equality (===)
     
Methods: 
    new Set([iterable]) : if an iterable object is provided, copies the values from the object into the set.
    set.add(value)
    set.has(value)
    set.delete(value)
    set.clear()

Property: set.size

*/

let set = new Set();

let john = {name: "John"};
let pete = {name: "Pete"};
let mary = {name: "Mary"};

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set.size); // 3
console.log(set);

/* Special case: set treats NaN as the same value, even though NaN === NaN is false! */
let mySet = new Set();

mySet.add(NaN);
mySet.add(NaN);

console.log(mySet.size); // 1

/*

Iteration over set: for...of
                    forEach

set.keys() -> returns an iterable for values
set.values() -> returns an iterable for values
set.entries() -> returns an iterable for entries [value, value]

** set does NOT support indexing and random access, like arrays.

*/

const newSet = new Set(['apples', 'oranges', 'bananas']);

for(let fruit of newSet) {
    console.log(fruit);
}

newSet.forEach((value, sameValue, newSet) => console.log(value));

/* question 1 */

function unique(arr) {
    /* your code */
    const uniqueValues = new Set(arr);
    const myArr = Array.from(uniqueValues);
    return myArr;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O

// console.log("pan".sort());

/* question 2 */


// function aclean(arr) {
//     const myArr = arr.map((item) => item.split("").sort().join("").toLowerCase());

//     console.log(myArr);

//     const set = new Set(myArr);
//     const res = [];

//     console.log(set);
//     for(let elem of set) {
//         const ind = myArr.findIndex((item, index) => item===elem);
//         res.push(arr[ind]);
//     }
//     console.log(res);


// }

// function aclean(arr) {
//     const myArr = arr.map((item) => item.split("").sort().join("").toLowerCase());

//     console.log(myArr);

//     const map = new Map();
//     let res = [];

//     for(let i=0; i<myArr.length; i++) {
//         map.set(myArr[i], i);
//     }

//     for(let index of map.values()) {
//         res.push(arr[index]);
//     }
    
    
//     console.log(res);


// }

//  aclean(arr) ; // "nap,teachers,ear" or "PAN,cheaters,era"

// function aclean(arr) {

//     const map = new Map();
//     let res = [];

//     for(let i=0; i<arr.length; i++) {
//         map.set(arr[i].toLowerCase().split("").sort().join(""), i);
//     }

//     for(let index of map.values()) {
//         res.push(arr[index]);
//     }
    
    
//     console.log(res);


// }

//  aclean(arr) ; 



