/*
Three types of coercion: => to string
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

Object → primitive conversion order:
Symbol.toPrimitive → valueOf → toString

Hints:

String() → string
Number() → number
+ → default
== → default

** In the Symbol.toPrimitive method, if the required hint is not present, then undefined will be returned

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


/*

Numeric conversion: Number(null) = 0
                    Number(undefined) = NaN

*/

console.log(NaN === NaN); // false
console.log(undefined == null); // true
console.log(undefined == undefined); // true

// console.log([1] > null); // true (1 > 0)
// console.log([] + null + 1); // "null1" (string concatenation)
// console.log({} + {});

console.log(!!2); // true
console.log(Boolean(0)); // false
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
  
  {}+[]+{}+[1] // at the start of a statement, {} may be considered as an empoty block, instead of an object!
  console.log({}+[]+{}+[1]); // now {} is definitely an object!

/* question */
new Date(0) - 0          // 0
new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'

/*

* For date, numeric conversion gives its timestamp.
  Number(new Date(0)) = 0

  + asks for prmitive with hint = 'default'
  for date objects, 'default' behaves like string
  new Date(0) -> "Thu Jan 01 1970 ..."

*/
