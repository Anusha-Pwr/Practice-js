// let user = {
//     name: "Piyush",
//     age: 24,
//     getDetails() {
//         console.log(this.name);
//     },
//     newObj: {
//         first: "Anu",
//         last: "Pal",
//         urgentDetails() {
//             const getNewDetails = () => {
//                 const nestedDetail = () => {
//                     console.log(this.first); // in an arrow function, this takes its value from the parent function
//                 }
//                 nestedDetail();
//             }
//             getNewDetails();
//         }  
//     }
// }

// user.getDetails();
// user.newObj.urgentDetails();

/* question 1 */
// const user = {
//     firstName: "Piyush!",
//     getName: () => {
//         const firstName = "Piyush"
//         return this.firstName;
//     }
// }

// console.log(user.getName());

/* question 2 */
// function makeUser() {
//     return {
//         name: "Piyush",
//         ref: this // points to the window object
//     };
// }

// let user = makeUser(); // the parent object of makeUser() function is the window object.
// console.log(user.ref.name); // undefined
// console.log(user.ref); // window object

/* question 3 */ // (!important)
// function makeUser() {
//     return {
//         name: "Piyush",
//         ref() {
//             return this;
//         }
//     };
// }

// let user = makeUser();
// console.log(user.ref().name);

/* question 4 */
// const user = {
//     name: "Piyush Agarwal",
//     logMessage() {
//         console.log(this.name); 
//     }
// }

// setTimeout(user.logMessage, 1000); // it is called as a callback function, so this loses context and points to the window object

/* question 5 */
// const user = {
//     name: "Piyush Agarwal",
//     logMessage() {
//         console.log(this.name);
//     }
// }

// setTimeout(() => {
//     user.logMessage(); // when the function is not invoked as a callback, this points to the user object 
// }, 1000);

/* question 6 */
// let length = 4;

// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(fn) {
//         fn(); // 0
//         console.log(this.length); // 5
//     }
// }
// object.method(callback);

// console.log(window.length); // 0

// let l = 4;

// const callback = () => {
//     console.log(this.l);
// }

// const object = {
//     l: 5,
//     method(fn) {
//         fn(); // undefined
//         console.log(this.l); // 5
//     }
// }
// object.method(callback);

/* question 7 */
// var length = 4;
// var a = -1;

// function callback() { // this points to the global object
//     console.log(this.length); // 'arguments' array object has a length property. So, it logs 3 to the console.
//     console.log(this.a);
//     console.log(this);
// }

// const object = {
//     length: 5,
//     method() {  // arguments = [callback, 2, 3] 
//         console.log(arguments.length);
//         arguments[0]();
//     }
// }
// object.method(callback, 2, 3);

// var length = 10;
// var a = -1;

// const callback = () => { // this points to the global object
//     console.log(this.length); // 'arguments' array object has a length property. So, it logs 3 to the console.
//     console.log(this.a);
// }

// const object = {
//     length: 5,
//     method() {  // arguments = [callback, 2, 3] 
//         console.log(arguments.length);
//         arguments[0]();
//     }
// }
// object.method(callback, 2, 3);

/* question 8 */

// const calc = {
//     total: 0,
//     add(val) {
//         this.total += val;
//         return this;
//     },
//     multiply(val) {
//         this.total *= val;
//         return this;
//     },
//     subtract(val) {
//         this.total -= val;
//         return this;
//     }
// }

// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

// this.a = 6;
// console.log(this);

// Create an object calculator

// let calculator = {
//     read() {
//         this.a = +prompt("Enter a:", 0);
//         this.b = +prompt("Enter b:", 0);
//     },
//     mul() {
//         return this.a*this.b;
//     },
//     sum() {
//         return this.a+this.b;
//     }
// }

// calculator.read();
// console.log(calculator.mul());
// console.log(calculator.sum());

// const calc = {  /*****************same question as classes!!*******************/
//     total: 0,
//     add(a) {
//          this.total +=a;
//          return this;
//     },
//     multiply(b) {
//         this.total *= b;
//         return this;
//     },
//     subtract(c) {
//         this.total -= c;
//         return this;
//     },
// }

// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

// let obj1 = {
//     name: "Anu",
//     age: 24,
//     getName: () => {
//         const getAge = () => {
//             console.log(this);
//         }
//         getAge();
//     }
// }

// obj1.getName();

// let obj1 = {
//     name: "Anu",
//     age: 24,
//     getName() {
//         function getAge() {
//             console.log(this);
//         }
//         getAge();
//     }
// }

// obj1.getName();


// const obj = {
//   myMethod() {
//     console.log(this);
//     return new Date().toString();
//   }
// };

// obj.myMethod(); // method invocation
// const func = obj.myMethod;
// func();             // function invocation
// const func1 = obj.myMethod();



// function Period (hours, minutes) {
//     this.hours = hours;
//     this.minutes = minutes;
//   }
  
//   Period.prototype.format = function() {
//     console.log(this === walkPeriod); // => true
//     return this.hours + ' hours and ' + this.minutes + ' minutes';
//   };
  
//   const walkPeriod = new Period(2, 30);
//   console.log(walkPeriod.format()); // => '2 hours and 30 minutes'
  

//   class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     log() {
//       console.log(this === myPoint); // => true
//       setTimeout(() => {
//         console.log(this === myPoint);      // => true
//         console.log(this.x + ':' + this.y); // => '95:165'
//       }, 1000);
//     }
//   }
//   const myPoint = new Point(95, 165);
//   myPoint.log();

// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     log() {
//       console.log(this === myPoint); // => true
//       setTimeout(function() {
//         console.log(this === myPoint);  // false    
//         console.log(this.x + ':' + this.y); 
//       }, 1000);
//     }
//   }
//   const myPoint = new Point(95, 165);
//   myPoint.log();

//   function Pet(name) {
//     this.name = name;
  
//     this.getName = () => this.name;
//   }
  
//   const cat = new Pet('Fluffy');
  
//   console.log(cat.getName()); // What is logged?
  
//   const { getName } = cat;
//   console.log(getName());     // What is logged?

// function Pet(name) {
//     this.name = name;
  
//     this.getName = function() {
//         return this.name;
//     }
//   }
  
//   const cat = new Pet('Fluffy');
  
//   console.log(cat.getName()); // What is logged?
  
//   const { getName } = cat;
//   console.log(getName());     // What is logged?


// let calculator = {
//     a: "",
//     b: "",

//     read() {
//         this.a = +prompt("enter a: ");
//         this.b = +prompt("enter b: ");
//     },

//     sum() {
//         return this.a+this.b;
//     },

//     mul() {
//         return this.a*this.b;
//     }
// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// var length = 4;

// const callback = () => {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method() {
//         callback();
//         console.log(this.length);
//     }
// }
// object.method();

// var x = 10;

// function hello() {
//     console.log(this.x);
// }

// const arr = [hello, "apple", 3];
// arr[0](); // undefined
// hello(); // 10

// var name = "khichdi";
// function duplicate() {
//     console.log(this.name);
// }

// const display = duplicate;

// const obj = {
//     name: "silvi",
//     display
// }

// duplicate();
// obj.display();
// display();

// var name = "khichdi";
// function duplicate() {
//     console.log(this.name);
// }


// const obj = {
//     name: "silvi",
//     display: duplicate,
//     show() {
//         console.log(this.display);
//     }
// }

// duplicate();
// obj.display();
// obj.show();
// display();


                                      /* Practice */

// hello = () =>  {
//     'use strict';
//     console.log(this);
// }

// hello();

// const calc = {
//     res: 0,
//     add(a) {
//         this.res += a;
//         return this;
//     },
//     subtract(a) {
//         this.res -= a;
//         return this;
//     },
//     multiply(a) {
//         this.res *= a;
//         return this;
//     },
//     divide(a) {
//         this.res /= a;
//         return this;
//     },
//     getResult() {
//         return this.res;
//     }
// }

// class Calculator {
//     constructor() {
//         this.res = 0;
//     }

//     add(a) {
//         this.res += a;
//         return this;
//     }

//     subtract(a) {
//         this.res -= a;
//         return this;
//     }

//     multiply(a) {
//         this.res *= a;
//         return this;
//     }

//     divide(a) {
//         this.res /= a;
//         return this;
//     }

//     getResult() {
//         return this.res;
//     }
// }

// const calc = new Calculator();
// const result = calc.add(10).subtract(5).multiply(2).divide(4).getResult();
// console.log(result); // 2.5