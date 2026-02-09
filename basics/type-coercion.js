// console.log(NaN === NaN);
// console.log(undefined == null);

/*

Arrays are objects, but with their own toString() method. 
Arrays override Object.prototype.toString()

Internally,
Array.prototype.toString !== Object.prototype.toString

What Array.prototype.toString() actually does?

it behaves like, arr.toString() === arr.join(",")


Why normal objects give [object Object] ?

Object.prototype.toString => which returns "[object " + internalClass + "]"

Object → "[object Object]"
Date   → "[object Date]"
Array  → "[object Array]"   // BUT only with Object.prototype.toString.call()

Object.prototype.toString.call([]);
// "[object Array]"

** Arrays override toString() to return a comma-separated list of elements, unlike plain objects which use Object.prototype.toString












*/

console.log([1] > null); // true (1 > 0)
console.log([] + null + 1); // "null1" (string concatenation)
console.log({} + {});

// let a = 012;

// [] + ![]          // "false"
// ![] + []          // "false"
// [] + +[]          // "0"
// !![] + []         // "true"

// You’re ready if you can explain:

// Why [] == 0 is true

// Why {} behaves differently from []

// Why obj + 1 sometimes concatenates

// What valueOf() and toString() do

// What Symbol.toPrimitive is

// ou should confidently explain:

// Why [] == ![] is true

// Why 0 == false but 0 === false is false

// Why "5" - 1 works but "5" + 1 doesn’t

// How objects convert during comparison

// When JS throws instead of coercing                                                                       