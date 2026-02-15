/*
Three types pf coercion: => to string
                         => to boolean
                         => to number

“Object-to-primitive conversion first checks Symbol.toPrimitive.
If absent, JS uses toString or valueOf depending on the hint.”

By default, valueOf() and toString() exist on all objects.
=> because all normal objects inherit from: Object.prototype

and Object.prototype defines: toString()
                              valueOf()
So unless you override them, every object has them via the prototype chain.

Default Behaviour (Plain object):

let obj = {};

obj.toString(); // "[object Object]"
obj.valueOf();  // returns the object itself

Array Behaviour:
let arr = [1, 2, 3];

arr.valueOf();  // returns the array itself (object)
arr.toString(); // "1,2,3"

*/


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

console.log(NaN === NaN); // false
console.log(undefined == null); // true

// console.log([1] > null); // true (1 > 0)
// console.log([] + null + 1); // "null1" (string concatenation)
// console.log({} + {});

console.log(!!2); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(4 + null); // 4

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

/* question */
// let obj = {
//     [Symbol.toPrimitive](hint) {
//       if (hint === "string") {
//         return "hello";
//       }
//     }
//   };
  
//   console.log(obj + 1); // NaN

/* question */
  let obj = {
    [Symbol.toPrimitive](hint) {
      return "10";
    }
  };
  
  console.log(obj * 2); // 20
  