// function statement or function declaration
// console.log(f);
// f();
// b(); // Type error (b is not a function!)
// console.log(b);
// c(); // Reference error (cannot access c before initialization)
// console.log(c); // same error
// function f() {
//     console.log("hello!");
// }



// //function expression
// var b = function () {
//     console.log("world!");
// }

// let c = function () {
//     console.log("hey!");
// }

// Anonymous function => can be used when functions are to be used as values!
// function () {  // syntax error
//     console.log("name required!");
// }

// named anonymous function
// let d = function xyz() {
//     console.log(xyz); // xyz is a local variable within that function
// }
// d();
// xyz(); // reference error

// first class functions or first class citizens [assigned to a variable, passed as an argument to a function or returned from a function]
// function f1(greet) {
//     console.log("f1 called");
//     console.log(greet);
//     var x = 5;
//     return function() {
//         console.log("namaste " + x);
//     }
// }

// var e = f1(function hello() {
//     console.log("hello here!");
// });
// e();
// console.log(e);


// console.log(x);

// getName();

// function getName() {
//     var y = 5;
//     console.log("hello there!");
//     console.log("y is " + y + " and x is " + x);
// }

// var x = 9;

// console.log(x); // error: x not defined!
// a1(); 
// b1(); 
// console.log(x); // 100

// function a1() {
//     x = 10;     // variables declared without a keyword are treated as global variables in js.
//     console.log(x);
// }

// function b1() {
//     x = 100;
//     console.log(x);
// }

// let z = 10; // syntax error
// let z = 5;
// console.log(z);

// {
//     var z = 10;
// }
// console.log(this.z);
// console.log(window.z);

// var c = 100;

// function x() {
//     var c = 30;
//     console.log(c); // 30
//     console.log(window.c); // 100
//     this.c = 20;
// }
// x();
// console.log(c); // 20

// var c = 100;

// function x() {
//     c = 30;
//     console.log(window.c); // 30
//     this.c = 20;
// }
// x();
// console.log(c); // 20

// var x = 2;
// {
//     var x = 5;
// }
// console.log(x); // 5

// Block Scoping
{
    var l = 9;
    {
        let l = 10;
        {
            l = 1;
            console.log(l); // 1
        }
        console.log(l); // 1
    }
    console.log(l); // 9
}

// function x() {
//     var a;
//     function y() {
//         console.log(a); // remembers the reference to the value, and not the value itself!
//     }
//     y();
//     a = 2;
//     return y;
// }

// var z = x();
// //.....
// z(); // 2

// function z() {
//     let b = 12;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

// Example of browser smartly collects garbage variables
// function f1() {
//     var x = 0, z = 10;
//     return function() {
//         console.log(x); // z is removed from the memory
//     }
// }

// var y = f1();
// x = 10;
// y();


// functionName();
// var num = 20;
// function functionName() {
//     console.log("Function has been called! " + num);  // Function has been called! undefined
// }

// console.log(typeof q); // undefined
// function test() {
//     var foo = 33;
//     if (foo) {
//     //   let foo = foo + 55; // ReferenceError
//     let foo;
//     foo = foo+55;
//     console.log(foo); // NaN
//     }
//   }
//   test();

// function test() {
//     var foo = 33;
//     if (foo) {
//       var foo = foo + 55;  // no error
//       console.log(foo); // 88
//     // let foo;
//     // foo = foo+55;
//     // console.log(foo); // NaN
//     }
//   }
//   test();

  //"use strict";
//   var x = 1;
//   delete x;
//   console.log(x);

// let a = 10;
// console.log(a);

// var x = 1;
// function x() {
//     console.log("jhkhl");
// }
// console.log(x);

//   console.log(typeof a); // undefined
//   var a;

// function foo(a) {
//     const a = 1;
// }


// function f() {
//     for(var i=0; i<3; i++) {
//         (function(i) {
//             setTimeout(() => {
//                 console.log(i); // use of closures
//             }, i*1000);
//         })(i);
//     }
// }

// f();

// function sum(a,b,c,d) {
//     return a+b+c+d;
// }

// console.log(sum(1,2,3,4));
// console.log(sum.length);

// function curry(func) {
//     return function curriedSum(...args) {
//         if(args.length >= func.length) {
//             return func(...args);
//         } else {
//             return function(...next) {
//                 return curriedSum(...args, ...next);
//             }
//         }
//     }
// }

// const totalSum = curry(sum);
// console.log(totalSum(1)(2)(3)(4));

