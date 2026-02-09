// /* call */


// Function.prototype.myCall = function(context={}, ...args) {
//     if(typeof this !== "function") {
//         throw new Error(this + " is not callable!");
//     }

//     context.fn = this;
//     context.fn(...args);
// }

// const obj = {
//     name: "Piyush",
//     age: 24
// };

// function intro(profession) {
//     console.log(`My name is ${this.name} and i am a ${this.age} year old ${profession}`);
// }

// intro.myCall(obj, "Developer");
// // intro.myApply(obj, ["Youtuber"]);

// /* Apply */

// Function.prototype.myApply = function(context={}, args=[]) {
//     if(typeof this !== "function") {
//         throw new Error(this + " is not callable!");
//     }

//     if(!Array.isArray(args)) {
//         throw new Error("CreateListFromArrayLike called on non-object!");
//     }

//     context.fn = this;
//     context.fn(...args);
// }

// intro.myApply(obj, ["Youtuber"]);

// /* Bind */

// Function.prototype.myBind = function(context={}, ...args) {
//     if(typeof this !== "function") {
//         throw new Error(this + " cannot be bound as it is not callable!");
//     }

//     context.fn = this;
//     return function(...newArgs) {
//         context.fn(...args, ...newArgs);
//     }
// }

// const newFunc = intro.myBind(obj);
// newFunc("Nutritionist");

// /* once */

// function once(func, context) {
//     return function() {
//         let ran;
//         if(func) {
//             ran = func.apply(this || context, arguments);
//             func = null;
//         }
//         return ran;
//     }
// }



// const newFn = once(function hello(a, b) {
//     console.log("Hii", a, b);
// });

// newFn(2, 3);
// newFn(2, 3);
// newFn(2, 3);

// /* memoize */

// function clumsyProduct(a, b) {
//     for(let i=0; i<10000000; i++) {}
//     return a*b;
// }

// function myMemoize(func, context) {
//     let res = {};

//     return function(...args) {
//         const argsCache = JSON.stringify(args);
//         if(!res[argsCache]) {
//             res[argsCache] = func.call(this || context, ...args);
//         }
//         return res[argsCache];
//     } 
// }

// const memoizedFunc = myMemoize(clumsyProduct);
// console.log(memoizedFunc(12, 12));

// /* map */

// const arr = [2, 5, 0, 6];

// const newArr = arr.map((item) => {
//     return item.toString(2);
// });

// console.log(newArr);

// Array.prototype.myMap = function(fn) {
//     let temp = [];

//     for(let i=0; i<this.length; i++) {
//         temp.push(fn(this[i], i, this));
//     }

//     return temp;
// }

// const newArr1 = arr.myMap((item) => {
//     return item.toString(2);
// });
// console.log(newArr1);

// /* filter */

// Array.prototype.myFilter = function(fn) {
//     let temp = [];

//     for(let i=0; i<this.length; i++) {
//         if(fn(this[i], i, this)) {
//             temp.push(this[i]);
//         }
//     }

//     return temp;
// }

// const newArr2 = arr.myFilter((item) => {
//     return item>2;
// });
// console.log(newArr2);

// /* reduce */

// Array.prototype.myReduce = function(fn, initialVal) {
//     let res = initialVal;

//     for(let i=0; i<this.length; i++) {
//         res = res ? fn(res, this[i], i, this) : this[i];
//     }

//     return res;
// }

// const newArr3 = arr.myReduce((acc, item) => {
//     return acc+item;
// }, 0);
// console.log(newArr3);

// var a = 10;
// a = 11;
// var a;
// console.log(a); // 11

// /* debounce */

// const myDebounce = (cb, d, ...args) => {
//     let timer;
//     return function() {
//         if(timer) clearTimeout(timer);
//         setTimeout(() => {
//             cb(...args);
//         }, d);
//     }
// }

// const debouncedCount = myDebounce(() => {}, 500);

// /* throttle */

// const myThrottle = (cb, d, ...args) => {
//     let last = 0;

//     return function() {
//         let now = new Date().getTime();
//         if(now-last<d) return;
//         last = now;
//         cb(...args);
//     }
// }

// const throttledCount = myThrottle(() => {}, 500);

/* curry */

// function sum(a,b,c,d) {
//     return a+b+c+d;
// }

// function curry(func) {
//     return function curriedFunc(...args) {
//         if(args.length>=func.length) return func(...args);
//         return function(...next) {
//             return curriedFunc(...args, ...next);
//         }
//     }
// }

// const total = curry(sum);
// console.log(total(1)(3)(4)(6));



// /* callback hell */
// const wordFunc = () => {
//     setTimeout(() => {
//         console.log("hello");
//         setTimeout(() => {
//             console.log("there!");
//             setTimeout(() => {
//                 console.log("Hurray!!");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }

// wordFunc();

// function sum(a) {
//     return function(b) {
//         if(!b) return a;
//         return sum(a+b);
//     }
// }
// const add = sum(1)(3)(4)(6)(); // 14
// console.log(add);