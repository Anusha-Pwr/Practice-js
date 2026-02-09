// var a = 10;
// let a = 2;

// let b = 100;
// {

//     var a = 10;
//     // let b = 20;
//     let c = 30;
//     console.log(b);
// }

// console.log(b);

/* closure */

// for (var i = 1; i <= 5; i++) {
//   function close(i) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }

//   close(i);
// }

// let c = "world";

// function outer(b) {
//     let a = 10;
//     return function inner() {
//         console.log(a, b, c);
//     }
// }

// outer("hello")();

// function counter() {
//     var count = 0;
//     return function incrementCounter() {
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();

/* named function expression */
// var b = function xyz() {
//     console.log("b called");
// }
// b();
// xyz();

/* recursive example */
// var b = function xyz(n) {
//     console.log(n);
//     if(n===0) return;
//     xyz(n-1);
// }

// b(5);

// var b = function () {
//     console.log("hello");
// }

// b();
 
/* stack trace error */
// var x = function xyz() {
//     throw new Error("boom");
// };
// x();

// var x = function () {
//     throw new Error("boom");
// };
// x();

// var b = function () {
//     throw new Error("boom");
// };

// var c = b;
// b = null;
// c(); // error at b

/* first class citizens */
// function abc(param) {
//     console.log(param);
//     param();
// }

// abc(function hey() {
//     console.log("hello");
//     throw new Error("boom");
// });

// d(); // reference error: cannot access d before initialization
// const d = function() {
//     console.log("called");
// };


/* setTimeout trust issue */

// console.log("start");

// setTimeout(() => {
//     console.log("callback");
// }, 5000);

// let startDate = new Date().getTime();
// let endDate = startDate;

// while(endDate < startDate + 10000) {
//     endDate = new Date().getTime();
// }

// console.log("while expires");

// console.log("end");

// console.log(bla);
// bla = 2;
// console.log(bla);
// var bla;
// console.log(bla);

if (true) {
    function test() {console.log("test called");}
  }
  test(); // ❓

//   if (1>2) {
//     function init() {
//         console.log("init called");
//     }
//   }
//   init();

  function a() {}
let a = 1;

  
  



