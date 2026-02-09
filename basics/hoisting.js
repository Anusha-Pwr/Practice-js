// function test(a) {
//   console.log(a);
//   function a() {}
// }

// test(5);

// let x = 0;
// console.log(typeof x);

// let e = 0;
// const e = 10;

// try {
//     throw 1;
//   } catch (e) {
//     let e = 2;
//     console.log(e);
//   }

//   try {
//     throw 10;
//   } catch (e) {
//     var e = 20;
//     console.log(e);
//   }
//   console.log(e);

//   try {
//     throw new Error();
//   } catch (e) {
//     var e = 2; // Works
//     console.log(e);
//   }
//   console.log(e); // undefined

// let x = 10;

// {
//   console.log(x);
//   let x = 20;
// }

// var x = 10;

// function test() {
//   if (false) {
//     var x = 20;
//   }
//   console.log(x);
// }

// test();

// /* question 1 */
// var x = 10;

// function test() {
//   console.log(x);
//   var x = 20;
// }

// test();

// /* question 2 */
// let x = 10;

// {
//   console.log(x);
//   let x = 20;
// }

// /* question 3 */
// var a = 1;

// function foo() {
//   console.log(a);
// }

// function bar() {
//   var a = 2;
//   foo();
// }

// bar();

// /* question 4 */
// {
//     let a = 10;
//     {
//       let a = 20;
//       console.log(a);
//     }
//     console.log(a);
//   }

// /* question 5 */
// try {
//     throw new Error();
//   } catch (e) {
//     console.log(typeof e);
//   }
//   console.log(typeof e);

// /* question 6 */
// try {
//     throw new Error();
//   } catch (e) {
//     var e = 5;
//     console.log(e);
//   }
//   console.log(e);

//   Why (important):

//   var e is hoisted to outer scope

//   Inside catch, e is rebound to the var

//   Assignment inside catch does not leak value outside

//   Outside: var e exists but was never assigned → undefined

//   ⚠️ Deprecated behavior — don’t rely on it.

// /* question 7 */
// function f(a = b, b = 2) {
//     console.log(a, b);
//   }
//   f();

// /* question 8 */
// function f(b = 2, a = b) {
//     console.log(a, b);
//   }
//   f();

// /* question 9 */
// var x = 1;

// if (true) {
//   function foo() {}
// }

// console.log(typeof foo);

// /* question 10 */
// "use strict";

// if (true) {
//   function bar() {}
// }

// console.log(typeof bar);

// /* question 11 */
// console.log(typeof a);
// let a = 10;

// /* question 12 */
// console.log(typeof a);
// var a = 10;

// /* question 13 */
// function outer() {
//     console.log(inner);
//     function inner() {}
//   }
//   outer();

// /* question 14 */
// function outer() {
//     console.log(inner);
//     var inner = function () {};
//   }
//   outer();

// /* question 15 */
// var x = 10;

// function test() {
//   if (false) {
//     var x = 20;
//   }
//   console.log(x);
// }

// test();

// /* question 16 */
// let x = 10;

// function test() {
//   if (false) {
//     let x = 20;
//   }
//   console.log(x);
// }

// test();

/* question 17 */

/* question 18 */
// try {
//   throw 10;
// } catch (e) {
//   var e = 20;
//   console.log(e);
// }
// console.log(e);

/* question 19 */
// try {
//     throw 5;
//   } catch (e) {
//     console.log(e);
//     var e;
//   }
//   console.log(e);

/* question 20 */
// try {
//     throw "err";
//   } catch (e) {
//     {
//       var e = 100;
//     }
//   }
//   console.log(e);

/* question 21 */
// try {
//     throw 1;
//   } catch (e) {
//     let e = 2;
//     console.log(e);
//   }

/* question 22 */
// try {
//     throw 1;
//   } catch (e) {
//     const e = 2;
//   }

/* question 23 */
// console.log(a);
// var a = 1;
// function a() {}

/* question 24 */
// var a = 1;
// function a() {}
// console.log(a);

/* question 25 */
// function a() {}
// var a;
// console.log(typeof a);

/* question 26 */
// if (true) {
//     function f() {}
//   }
//   console.log(typeof f);

/* question 27 */
// if (false) {
//     function g() {}
//   }
//   console.log(typeof g);

/* question 28 */
// function test(a) {
//     var a;
//     console.log(a);
//   }
//   test(10);

/* question 29 */
// function test(a) {
//     function a() {}
//     console.log(typeof a);
//   }
//   test(5);

//   function test(a) {
//     function a() {}
//     // a = 10;
//     console.log(typeof a);
//   }
//   test(5);

//   var m = 2;
//   function m() {
//   }
//   console.log(typeof m);

/* question 30 */
// (function () {
//   x = 10;
// })();
// console.log(x);

/* question 31 */
// (function () {
//   var x = (y = 20);
// })();
// console.log(typeof x, typeof y);

/* question 32 */
// console.log(a);
// var [a] = [10];

/* question 33 */
// console.log(b);
// let b = 2;

/* question 34 */
// {
//     console.log(c);
//     const c = 3;
//   }

/* question 35 */
// if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context

// // Re-assigning to a constant variable throws an error
// MY_FAV = 20; // TypeError: Assignment to constant variable

// // Redeclaring a constant throws an error
// const MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
// var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
// let MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared

// t = 3;
// const t = 5;
// var t = 2;
// let t = 10;

                                             /* higher order functions */
// const arr = [5, 1, 3, 2, 6];

// const output = arr.reduce(function(acc, curr) {
//     if(acc<curr) {
//         acc = curr;
//     }
//     return acc;
// }, Number.MIN_VALUE);

// console.log(output);

const users = [
    {firstName: "Akshay", lastName: "Saini", age: 26},
    {firstName: "Donald", lastName: "Trump", age: 75},
    {firstName: "Elon", lastName: "Musk", age: 50},
    {firstName: "Tina", lastName: "Padukone", age: 27},
];

const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);

const age = users.reduce(function(acc, curr) {
    if(acc[curr.age]) {
        acc[curr.age] += 1;
    } else {
        acc[curr.age] = 1;
    } 
    return acc;
}, {});

console.log(age);

// const name = users.filter(x => x.age<30).map(y => y.firstName);
// console.log(name);

const names = users.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(names);

const arr = [2, 5, 1];
const sum = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0);
console.log(sum);

const summ = arr.reduce((acc, curr) => acc+curr);
console.log(summ);

// [].reduce((acc, curr) => acc + curr);

  
const a = [1, 2, 3].reduce((acc, curr) => {
    acc + curr; // ❌ no return
  }, 0);
  
console.log(a);