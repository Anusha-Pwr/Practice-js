/*

** Primitives cannot store properties. JavaScript temporarily wraps primitives in objects to allow method access,
   but those temporary objects are immediately discarded.

indexOf:  str.indexOf(substr, pos)
  => Returns first occurence or -1
  => is case-sensitive
  => treats negative index as 0
  => if the start index exceeds length it returns -1 — except for empty string, which returns the string length.
  => we should avoid using it directly in conditions because 0 is falsy
  => non-string values are converted to string

slice:
  => negative indices count from the end
  => start > end -> return empty string
  => if end >= length -> clamp to length
  => missing arguments
  => very negative values treated as 0
  => works the same for arrays
  => If start is omitted, undefined, or cannot be converted to a number, it's treated as 0.

substring:
  => negative values are treated as 0
  => start > end -> swap values
  => NaN or undefined handling -> treated as 0

For both slice and substring: 
 => if start index is undefined -> treated as 0
 => if end index is undefined -> treated as str.length
 => if end index is NaN -> treated as 0

Input	           slice	substring
start = undefined	0	      0
end = undefined	   length	length
start = NaN	        0	      0
end = NaN	        0	      0 (then swap if needed)

includes():
 => return boolean
 => empty string always gives true
 => if index>=length, always gives false
 => negative index treated as 0
 => type coercion happens
 => regex not allowed
 => it is preferred over indexOf in if checks

 get the last character: str.slice(-1)
 remove the last character: str.slice(0, -1)
 remove the first and last character: str.slice(1, -1)

To access a character: 1. str[i]
                       2. str.at(pos) -ve indices allowed
                       3. str.charAt(pos) out of bounds gives "", -ve indices not allowed
*/

const str = "hello";

str[1];         // "e"
str.at(-1);     // "o"
str[10];        // undefined
str.at(10);     // undefined
str.charAt(10); // ""

/*
replace(): 

split(): Consecutive separators create empty strings between them.

*/

// 'use strict';
let str = "Hello";

str.test = 5; // JS creates a temporary wrapper object: let temp = new String("Hello"); temp.test = 5;
              // this wrapper only exists for this operation, immediately after this, temp = null;
              // in strict mode, writing into this property gives TypeError

/* again a temporary warapper object is created but this object has no trace of the 'test' property  */
alert(str.test); // undefined


// let str = "hello";
// console.log(str.indexOf("he", 5)); // -1
// console.log(str.indexOf("", 5)); // 5

console.log("123".indexOf(2)); // 1
console.log("hello".indexOf(undefined)); // -1 ("undefined" is searched)

console.log("hello".slice(100) ); // "" (nothing could be extracted)

console.log("hello".indexOf("", 7)); // 5
console.log("hello world hello".indexOf("o", 99)); // -1

console.log("hello".includes("", 6)); // true (empty string is always found)
console.log("hello".indexOf("", -1)); // 0
console.log("hello".indexOf("")); // 0
console.log("hello".includes("h", 5)); // false

const strr = "hello";
console.log(strr.substring(-4, -1)); // ""

// let str = "hello";

// console.log(str.substring(2)); // "llo"
// console.log(str.substring(2, undefined)); // "llo"
// console.log(str.substring(undefined, 3)); // "hel"

// console.log(str.substring(1, "fellow")); // "h"

// console.log(str.slice(1, undefined)); // "ello"
// console.log(str.slice(undefined, 4)); // "hell"
// console.log(str.slice("fellow", 4)); // "hell"
// console.log(str.slice(1, "fellow")); // ""
// console.log(str.slice(4, 1)); // ""

// console.log("hello".slice(2, undefined)); // "llo"
// console.log("hello".slice(2, NaN)); // ""

console.log("hello".indexOf("")); // 0
console.log("hello".indexOf(" ")); // -1
console.log("".indexOf("ell")); // -1
console.log("".indexOf("", 1)); // 0
console.log("fine".indexOf("in", 4)); // -1
console.log("fine".indexOf("", 4)); // 4
console.log(" a".indexOf("", 3)); // 2
console.log(" ".indexOf("", 3)); // 1