// const now = new Date();
// console.log(now);
// console.log(now.toLocaleDateString());
// console.log(now.toISOString());
// console.log(now.toUTCString());
// console.log(now.toLocaleString());
// console.log(now.getTime());
// console.log(new Date(now.getTime()));
// console.log(Date.now());

// const date1 = new Date('2024-04-01');
// const date2 = new Date('2024-04-01T00:00:00Z');

// if (date1.getTime() === date2.getTime()) {
//   console.log('The dates are the same.');
// } else if (date1 > date2) {
//   console.log('date1 is later than date2.');
// } else {
//   console.log('date1 is earlier than date2.');
// }

// let specificDate = new Date("2024-11-29");
// console.log(specificDate);

// var a = 10;
// // console.log(a);
// var a = 100;
// console.log(a); // 100
// const a = 20;
// var a;
// a = 10;

// const a = 20;
// {
//   let a = 30;
//   {
//     var a = 1;
//   }
// }

// for(var i=1; i<=5; i++) {
//   function close(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i*1000);
//   }
//   close(i);
// }

// var a = function xyz() {
//   console.log(xyz);
// }

// a();
// xyz();

// function hello() {
//   console.log(hello);
// }
// hello();

// const arr = [1, 3, 6, 2];

// const maxValue = arr.reduce((acc, curr) => {
//   if(curr > acc) {
//     acc = curr;
//   } 
//   return acc;
// }, 0);
// console.log(maxValue);

// const sum = arr.reduce((acc, curr) => {
//   console.log(curr);
//   return acc + curr;
// });
// console.log(sum);

// fn();
// function fn() {
//   let a = 2;
//   console.log(a, b);
// }

// var b = 5;
// // let b = 5;


// /* closures */

// function createBase(val) {
//   return function(x) {
//     console.log(x+val);
//   }
// }

// var addSix = createBase(6);
// addSix(10); // 16
// addSix(21); // 27

// getName();
// console.log(x); // undefined
// var x = 9;
// // function getName() {
// //   console.log("namaste js");
// //   console.log(x); // undefined
// // }

// var getName = () => {
//   console.log("namaste js");
//   console.log(x); // undefined
// }

// let a;
// console.log(a); // undefined
// a = 10;
// console.log(a); // 10

// console.log(a); // reference error
// let a;
// a = 10;


// const b; // syntax error: missing initializer in const declaration
// b = 10;

// let a = 0;
// const b = 10;
// var c = 7;
// console.log(c);

// let a;
// console.log(a);
// a = 5;
// console.log(a);

// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
//   b = 1000;
// }
// z();

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   b = 1000;
//   x();
//   // b = 1000;
// }
// z();

b();
let b = function () {
  console.log("hello world");
}
