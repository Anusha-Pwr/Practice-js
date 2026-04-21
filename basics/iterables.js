/* 

Iterable: An object becomes iterable if it implements Symbol.iterator.

How to make an object iterable?

* To make for...of work, we must add: range[Symbol.iterator] = function() {...}
* when for...of starts, JS internally does: const iterator = range[Symbol.iterator]() // this happens only once
* this Symbol.iterator returns an iterator object: return {
  next() { ... }
}; which controls the loop.

* for...of repeatedly calls iterator.next()
* each time, it expects: { value: something, done: boolean }

Internally, this:
for (let num of range)

👉 behaves like:

const iterator = range[Symbol.iterator]();

while (true) {
  const result = iterator.next();

  if (result.done) break;

  console.log(result.value);
}

Must know:
Symbol.iterator makes object iterable
It returns an iterator
Iterator has next()
next() returns { value, done }
for...of uses this internally

Iterable and iterator can be combined
But it's generally not ideal
Because of shared state issue

Array-like object: An object is array-like, if:
                  -> it has numeric indexes
                  -> it has length property

Real world examples: Array-like: arguments, DOM collections like NodeList, HTMLCollection
                     iterables: strings, arrays, maps, sets

Somethings are both iterable and array-like, eg: strings

Array.from(): it takes an iterable or array-like value and makes a real array from it, then we can use array methods on it.

Full syntax: Array.from(obj[, mapFn, thisArg])
eg: let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25

*/

/*
 Strings in JS are stored as UTF-16 encoded sequences. 
 That means: sequence of 16-bit units (code units)
             Most normal characters -> 1 unit
             some characters (like emojis) -> 2 units

.length: returns number of UTF-16 code units, NOT actual characters!

"for loop accesses UTF-16 code units, so it can break surrogate pairs like emojis.
 for...of uses the string iterator, so it correctly iterates over full Unicode characters"
*/

let str = "😂";
for(let i=0; i<str.length; i++) {
    console.log(str[i]);
}

// for...of iterates over Unicode characters, not raw code units
// for...of uses the string’s iterator, which is Unicode-aware, unlike indexing which works on UTF-16 code units.

for(let char of str) {
    console.log(char);
}

let strr = "😂a"
console.log(strr.at(0)); // broken character 

/* an empty array is returned when normal object is passed to Array.from() */
let range = {
    from: 1,
    to: 5
  };

const arr = Array.from(range);
console.log(arr); // []

/* split does not handle surrogate pairs correctly, it works on indexing */
let str1 = "x😂";
// let newStr = str1.split("");
// console.log(newStr); // [x, broken, broken]

/* Array.from handles surrogate pairs correctly */
let newStr = Array.from(str1);
console.log(newStr); // ['x', '😂']

/* we can use Array.from to build surrogate-aware slice */
/* native slice method does not support surrogate pairs */

let myStr = '𝒳😂𩷶';
const subStr = myStr.slice(1, 3);
console.log(subStr); // broken character string

console.log(Array.from(myStr).slice(1, 3).join("")); // surrogate-aware slice