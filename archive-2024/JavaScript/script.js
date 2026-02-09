// console.log(x);
// var x = 3;

// function a() {
//     var b = 10;
//     c();
// }

// a();

// function c() {
//     console.log(b); // b is not defined, function c is not lexically present inside function a.
// }

// let f;
// console.log(f); // undefined

// console.log(this.a); // undefined
// let a = 10;
 
// console.log(this.k); // undefined

// const obj = {};
// console.log(obj.a); // undefined (because `a` is not a property of `obj`)


// function abc() {
//   // console.log(a,b,c);  // reference error directly
//   console.log(a); // undefined
//   console.log(b); // reference error
//   console.log(c);
//   const c = 1;
//   let b = 2;
//   var a = 3;
// }
// abc();

// if(false) {
//     var x = 10;
//     console.log(x);
// } else {
//     let a = 2;
//     console.log(a);
// }

// var a = 10;
// function x() {
//     var a = 1;
//     function y() {
//         let b = 2;
//         function z() {
//             console.log(a, b);
//         }
//         return z;
//     }
//     return y;
//     a = 67;
// }

// const f = x();
// console.log(f);
// const t = f();
// console.log(t);
// t();

// function x() {
//     for(var i=1; i<=5; i++) {
//         (function(i) {
//             setTimeout(() => {
//                 console.log(i);
//             }, i*1000);
//         })(i);
//     }
//     console.log("hello");
// }
// x();

// setTimeout(function a(){
//     console.log("Hola!");
// }, 5000);
// a(); // reference error: a is not defined!
// console.log("end");

// function f() {
//     setTimeout(function a(){
//         console.log("Hola!");
//     }, 5000);
//     a(); // error
// }
// f();
// console.log("end");


// var q = 0;

// {
//     let q = 1;
//     console.log(q);
// }

// const x = 3;

// {
//   console.log(x);
//   const x = 4;
// }

// const fn = (a,x,y,...numbers) => {  // rest parameter should be the last param
//     console.log(x,y);
//     console.log(numbers);
// }

// fn(1,3,2,5,6,9);

// function myFun() {
//     console.log(arguments); // "arguments" keyword is only used in regular/normal functions.
// }

// myFun(3, "hello");

// function test() {
//     var foo = 33;
//     if (foo) {
//       let foo = foo + 55; // ReferenceError
//     // let foo;
//     // foo = foo+55;
//     }
//   }
//   test();

//   function go(n) {
//     // n here is defined!
//     console.log(n); // { a: [1, 2, 3] }
  
//     for (let n of n.a) {
//       //          ^ ReferenceError
//       console.log(n);
//     }
//   }
  
//   go({ a: [1, 2, 3] });

// function createBase(num) {
//     return function increment(val) {
//         console.log(num+val);
//     }
// }

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// Time Optimization

// function outerFind() {
//     let a = [];
//     for(let i=0; i<1000000; i++) {
//         a[i] = i*i;
//     }
//     return function (index) {
//         console.log(a[index]);
//     }
// }

// const find = outerFind();
// find(6);
// find(12);

// function a() {
//     for(var i=0; i<5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         },i*1000);
//     }
// }

// a();

// function a() {
//     for(var i=0; i<5; i++) {
//         (function (i) {
//             setTimeout(() => {
//                 console.log(i);
//             },i*1000);
//         })(i);
//     }
// }

// a();

// Private Counter using closures

// function counterFun() {
//     let _counter = 0; // private variable

//     function add(val) {
//         return _counter += val;
//     }

//     function display() {
//         console.log("counter is " + _counter);
//     }

//     return {
//         add,
//         display
//     }
// }

// let c = counterFun();
// c.add(5);
// c.add(20);
// c.display();
  
//   const obj = {
//     name: "Anupriya",
//     age: 21,
//     show: function() {
//         var color = "blue";
//         return () => {
//             console.log(this.name, this.age, color);
//         }
//     }
//   }

//   const func = obj.show();
//   func();

// function hello() {
//     var color = "blue";
//     return () => {
//         console.log(this.name, this.age, color);
//     }
// }

// const obj = {
//     name: "Anupriya",
//     age: 21,
//     show: hello()
//   }

//   obj.show();

//   function getThis() {
//     // 'use strict';
//     console.log(this);
//   }
  
//   const one = getThis.bind(1);
  
//   one();         // => 1
  
//   one.call(2);   // => 1
//   one.apply(2);  // => 1
//   one.bind(2)(); // => 1
  
//  new one(); 
 
