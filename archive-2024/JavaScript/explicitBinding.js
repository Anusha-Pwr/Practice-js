/* call */
// var obj = {
//     name: "Piyush"
// }

// function sayHello(age) {
//     console.log("Hello " + this.name+ " is " + age);
// }

// sayHello.call(obj, 24);


/* apply */
// var obj = {
//     name: "Piyush"
// }

// function sayHello(age, profession) {
//     console.log("Hello " + this.name+ " is " + age + " and is a " + profession);
// }

// sayHello.apply(obj, [24, "Software Engineer"]);

/* bind */
var obj = {
    name: "Piyush"
}

function sayHello(age, profession) {
    console.log("Hello " + this.name+ " is " + age + " and is a " + profession);
}

// const bindFun = sayHello.bind(obj, 24, "dancer");
// bindFun(67, "developer"); // doesn't matter if you change the arguments, the output will be the same as with previous arguments.
const bindFun = sayHello.bind(obj); // now the new arguments provided will work in all the cases!
// bindFun(24, "dancer");
// bindFun(24, "youtuber");
// bindFun(67, "developer");
// bindFun();

/* question 1 */
// const person = {
//     name: "Piyush"
// }

// function sayHi(age) {
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, "developer"));
// console.log(sayHi.bind(person, 24));

/* question 2 */
// const age = 10;

// const person = {
//     name: "Piyush",
//     age: 20,
//     getAge: function () {
//         return this.age;
//     }
// }

// var person2 = {age: 24};

// console.log(person.getAge.call(person2)); // 24
// console.log(person.getAge.bind(person2)()); // 24

/* question 3 */
// var status = "😎";

// setTimeout(() => {
//     const status = "😍";

//     const data = {
//         status: "🥑",
//         getStatus() {
//             return this.status;
//         }
//     }

//     console.log(data.getStatus()); // 🥑
//     console.log(data.getStatus.call(this)); // 😎
// }, 0);

// const animals = [
//     {species: "Lion", name: "King"},
//     {species: "Whale", name: "Queen"}
// ];

// function printAnimals(i) {
//     console.log(this);
//     this.print = function () {
//         console.log(this);
//         console.log("#" + i + " " + this.species + ": " + this.name);
//     }
//     this.print();
// }

// printAnimals.bind(animals[0], 1)();

// const animals = [
//     {species: "Lion", name: "King"},
//     {species: "Whale", name: "Queen"}
// ];

// function printAnimals(i) {
//     console.log(this);
//     let print = function () {
//         console.log(this);
//         console.log("#" + i + " " + this.species + ": " + this.name);
//     }
//     print();
// }

// printAnimals.bind(animals[0], 1)();

// let userPerson = {
//     name: "Ajay",
//     age: 34
// }

// function Name() {
//     console.log(this.name);
//     this.getAge = function getAge() {
//         console.log(this.age);
//     }
//     this.getAge();
// }

// Name.apply(userPerson);

/* question 4 */
// const animals = [
//     {species: "Lion", name: "King"},
//     {species: "Whale", name: "Queen"}
// ];

// function printAnimals(i) {
//     this.print = function () {
//         console.log("#" + i + " " + this.species + ": " + this.name);
//     }
//     this.print();
// }

// console.log(animals);
// let i = 0;
// while(i<animals.length) {
//     printAnimals.call(animals[i], i+1);
//     i++;
// }

// printAnimals.bind(animals[0])(1);

/* question 5 => Append an array to another array */
// const array = ["a", "b"];
// const elements = [0, 1, 2];
// array.push.apply(array, elements);
// console.log(array);

/* question 6 */
// const array = [2, 1, 0, 5, 3, 8, 4];
// console.log(Math.max.apply(null, array));
// console.log(Math.min.apply(null, array));

/* question 7 */
function f() {
    console.log(this); // window object
}

let userP = {
    g: f.bind(null)
}

userP.g();

// let i = 5;
// let res = i++;
// console.log(i); // 6
// console.log(res); // 5
// console.log(res); // 5

// let i = 5;
// let res = ++i;
// console.log(i); // 6
// console.log(res); // 6
// console.log(res); // 6

// function f() {
//     console.log(this); // window object
// }

// let use = {
//     g: f
// }

// use.g(); // the object use is logged to the console

/* question 8 => Bind chaining doesn't exist */
// function f() {
//     console.log(this.name); // John
// }

// f = f.bind({name: "John"}).bind({name: "Ann"}); 
// f();

/* question 9 */
// function checkPassword(success, fail) {
//     let password = prompt("Password ?", "");
//     if(password === "coder") {
//         success();
//     } else {
//         fail();
//     }
// }

// let user = {
//     name: "Piyush Agarwal",
//     loginSuccessful() {
//         console.log(`${this.name} successfully logged-in`);
//     },
//     loginFail() {
//         console.log(`${this.name} failed to login`);
//     }
// }

//  checkPassword(user.loginSuccessful, user.loginFail); // previous code
// checkPassword(user.loginSuccessful.bind(user), user.loginFail.bind(user)); // corrected code

/* question 10 */
// function checkPassword(ok, fail) {
//     let password = prompt("Password ?", "");
//     if(password === "coder") {
//         ok();
//     } else {
//         fail();
//     }
// }

// const user = {
//     name: "Piyush Agarwal",
//     login(result) {
//         console.log(this.name + (result ? " successfully logged-in" : " failed to login"));
//     }
// }

// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

/* question 11 */
// const age = 10;

// const person = {
//     name: "Piyush",
//     age: 20,
//     getAgeArrow: () => {
//         console.log(this.age);
//     },
//     getAge() {
//         console.log(this.age);
//     }
// }

// var person2 = {age: 24};
// person.getAge.call(person2); // 24
// person.getAgeArrow.call(person2); // undefined

// console.log(typeof NaN); // number
// console.log(typeof undefined); // undefined

// let age = 56;

// const getAge = () => {
//     console.log(this.age);
// }

// getAge();




// const numbers = {
//     array: [3, 5, 10],

//     getNumbers() {
//       return this.array;
//     }
//   };

//   // Create a bound function
//   const boundGetNumbers = numbers.getNumbers.bind(numbers);
//   console.log(numbers.getNumbers());
//   console.log(boundGetNumbers()); // => [3, 5, 10]

//   // Extract method from object
//   const simpleGetNumbers = numbers.getNumbers;
//   console.log(simpleGetNumbers());

  function getThis() {
    'use strict';
    return this;
  }

  const one = getThis.bind(1);

  console.log(one());         // => 1

  console.log(one.call(2));   // => 1
  console.log(one.apply(2));  // => 1
//   console.log(one.bind(2)()); // => 1
  console.log(one.bind(2));
  console.log(one.bind(2)()); // 1

  const newObj = new one();
  console.log(newObj);

// Polyfills 
// Polyfill for call() method

// let car1 = {
//     name: "Ferrari",
//     color: "red"
// }

// function purchaseCar(currency, price) {
//     console.log(`I purchased a ${this.color} ${this.name} for ${currency} ${price}.`);
// }

// Function.prototype.myCall = function(context={}, ...args) {
//     if(typeof this !== "function") {
//         throw new Error(this + " is not callable!");
//     }

//     context.func = this;
//     context.func(...args);
// }

// purchaseCar.myCall(car1, "₹", 5000000);
// purchaseCar.call(car1, "₹", 5000000);

// Polyfill for apply() method

// let car2 = {
//     name: "Audi",
//     color: "black"
// }

// function purchaseCar(currency, price) {
//     console.log(`I purchased a ${this.color} ${this.name} for ${currency} ${price}.`);
// }

// Function.prototype.myApply = function(context={}, args=[]) {
//     if(typeof this !== "function") {
//         throw new Error(this + " is not callable");
//     }

//     if(!Array.isArray(args)) {
//         throw new TypeError("CreateListFromArrayLike called on non-object!");
//     }

//     context.func = this;
//     context.func(...args);
// }

// purchaseCar.myApply(car2, ["₹", 10000000]);

// purchaseCar.apply(car2, ["₹", 10000000]);

// Polyfill for bind() method

// let car3 = {
//     name: "Mercedes",
//     color: "gray"
// }

// function purchaseCar(currency, price) {
//     console.log(`I purchased a ${this.color} ${this.name} for ${currency} ${price}.`)
// }

Function.prototype.myBind = function(context={}, ...args) {
    if(typeof this !== "function") {
        throw new Error(this + " cannot be bound as it is not callable!");
    }

    context.fn = this;
    return function(...newArgs) {
        context.fn(...args, ...newArgs);
    }
}

const x = 10;
console.log(x.toString(2)); // 1010

// const newFunc = purchaseCar.myBind(car3);
// newFunc("₹",10000000);
// const newFunc = purchaseCar.bind(car3);
// newFunc("₹", 90000000);

// var x = 1;
// b();
// c();
// console.log(x);

// function b() {
//     var x = 10;
//     console.log(x);
// }

// function c() {
//     var x = 100;
//     console.log(x);
// }

// let m;
// console.log(m); // undefined
// m = 10;

// console.log(m); // reference error
// let m = 10;

// {
//     var l = 10;
//     let m = 20;
//     const n = 30;

//     console.log(l);
//     console.log(m);
//     console.log(n);
// }

// console.log(l);
// console.log(m);
// console.log(n);

// var c = 100;
// function x() {
//     var c = 30;
//     console.log(window.c); // 100
//     window.c = 20;
// }

// x();
// console.log(c); // 20

// function x() {
//     var k = 5;
//     function y() {
//         console.log(k);
//     }
//     return y;
// }
// const f = x();
// f();

// function print() {
// nonExisting = "hello";
// console.log(nonExisting); // hello
// }
// print();
// console.log(this.nonExisting); // hello

// {
//     nonExisting = "hello";
//     console.log(nonExisting); // hello
// }
// console.log(nonExisting); // hello

// {
//     nonExisting; // error
//     nonExisting = "hii";
//     console.log(nonExisting);
// }
// console.log(nonExisting);

// function print() {
//     var i = 9;
//     setTimeout(() => {
//         console.log(i); // 10
//     }, 1000);
//     i = 10;
// }
// print();

// for(var i=1; i<5; i++) { // closure is formed
//     (function(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     })(i);  
// }
// console.log("hello world!");

// very important
// function outer() {
//     function inner() {
//         console.log(a);
//     }

//     return inner;
//     var a = 10;
// }

// outer()(); // undefined (and not error)

// Counter

// function Counter() {
//     var count = 0;
//     return function increment() {
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = Counter();
// counter1();
// counter1();

// Scalable Counter

// function Counter() {
//     var count = 0;

//     this.increment = function() {
//         count++;
//         console.log(count);
//     }

//     this.decrement = function() {
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new Counter();
// counter1.increment();
// counter1.decrement();

// var b = function printIntro() {
//     console.log("I'm a function.");
// }

// printIntro(); // Reference error, not defined

// function action() {
//     var count = 0;
//     document.getElementById("clickMe").addEventListener("click", function () {
//         console.log("Button clicked " + ++count);
//     })
// }
// action();



// const animals = [
//     {species: "Lion", name: "King"},
//     {species: "Whale", name: "Queen"}
// ];

// function printAnimals(i) {
//     this.print = function () {
//         console.log("#" + i + " " + this.species + ": " + this.name);
//     }
//     this.print();
// }

// for(let i=0; i<animals.length; i++) {
//     printAnimals.call(animals[i], i+1);
// }


// const obj = {
//   num: 2,
//   multiply: function(number) {
//     'use strict';
//     return this.num * number;
//   }
// }

// console.log(obj.multiply(2)); // 4
// console.log(multiply.apply(2, [2])); // 4
// create a bound function with context
// const double = multiply.bind(2);
// // invoke the bound function
// console.log(double(3)); // => 6
// console.log(double(10)); // => 20

                                        /* Bind function */
// class Base {
//   constructor() {
//     console.log(new.target === Derived); // Logs: true if Derived is instantiated
//     console.log(new.target === Base); // false
//   }
// }

// class Derived extends Base {
//   constructor() {
//     super();
//   }
// }

// const instance = new Derived(); 
                                
class LateBloomer {
  constructor() {
    this.petalCount = Math.floor(Math.random() * 12) + 1;
  }
  // bloom() {
  //   // Declare bloom after a delay of 1 second
  //   setTimeout(this.declare.bind(this), 1000);
  // }

  bloom() {
    // Declare bloom after a delay of 1 second
    setTimeout(() => this.declare(), 1000);
  }
  declare() {
    console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
  }
}

const flower = new LateBloomer();
flower.bloom();

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return `${this.x},${this.y}`;
};

const p = new Point(1, 2);
p.toString();
// '1,2'

// The thisArg's value doesn't matter because it's ignored
const YAxisPoint = Point.bind(null, 0 /*x*/);

const axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true
                                      
                                    /* calling bound function without 'new' */
// const emptyObj = {};
// const YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

// // Can still be called as a normal function
// // (although usually this is undesirable)
// YAxisPoint(13);

// // The modifications to `this` is now observable from the outside
// console.log(emptyObj); // { x: 0, y: 13 }



