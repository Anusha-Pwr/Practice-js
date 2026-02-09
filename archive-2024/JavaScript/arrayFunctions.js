// const arr = [5, 1, 3, 2, 6];

// const output = arr.map((item) => {
//     return item*2;
// });

// console.log(output);

// const result = arr.filter((item) => {
//     return item%2===1;
// });
// console.log(result);

// const sum = arr.reduce((curr, item) => {
//     curr += item;
//     return curr;
// }, 0);
// console.log(sum);

const maximum = arr.reduce((acc, curr) => {
    if(acc<curr) {
        acc = curr;
    }
    return acc;
}, Number.MIN_VALUE);

console.log(maximum); // 6

// const users = [
//     {firstName: "Akshay", lastName: "Saini", age: 26},
//     {firstName: "Donald", lastName: "Trump", age: 75},
//     {firstName: "Elon", lastName: "Musk", age: 50}
// ];

// const fullName = users.map((item) => {
//     return item.firstName + " " + item.lastName;
// });

// console.log(fullName);

// const details = users.reduce((curr, item) => { 
//     if(curr.item.age) {           // wrong notation!!
//         curr.item.age += 1;
//     } else {
//         curr.item.age = 1;
//     }
//     return curr;
// }, {});

// console.log(details);

// const details = users.reduce((curr, item) => {
//     if(curr[item.age]) {        // correct notation
//         curr[item.age] += 1;
//     } else {
//         curr[item.age] = 1;
//     }
//     return curr;
// }, {});

// console.log(details);

// const filtered = users.filter((item) => { /* wrong */
//     if(item.age<30) {
//         return item.firstName;
//     }
// });
// console.log(filtered);

// const filtered = users.filter((item) => { /* correct */
//     return item.age<30;
// }).map((item) => {
//     return item.firstName;
// });
// console.log(filtered);

// const filteredUsers = users.reduce((curr, item) => {
//     if(item.age<30) {
//         curr.push(item.firstName);
//     }
//     return curr;
// }, []);

// console.log(filteredUsers);

/* Polyfills for map, filter and reduce */

// const myArr = [2, 5, 1, 0];

// const res = myArr.map((item, i, myArr) => {
//     return item+2;
// });
// console.log(res);

// Array.prototype.myMap = function(cb) {
//     let temp = [];
//     for(let i=0; i<this.length; i++) {
//         temp.push(cb(this[i], i, this));
//     }
//     return temp;
// }

// const res1 = myArr.myMap((item, i, myArr) => {
//     return item+2;
// });
// console.log(res1);

// Array.prototype.myFilter = function(cb) {
//     let temp = [];
//     for(let i=0; i<this.length; i++) {
//         if(cb(this[i], i, this)) {
//             temp.push(this[i]);
//         }
//     }
//     return temp;
// }

// const filteredRes = myArr.myFilter((item, i, myArr) => {
//     return item>3;
// });

// console.log(filteredRes);

// Array.prototype.myReduce = function(cb, initial) {
//     let result = initial;

//     for(let i=0; i<this.length; i++) {
//         result = result ? cb(result, this[i], i, this) : this[i];
//     }

//     return result;
// }

// const add = myArr.myReduce((acc, item, i, myArr) => {
//     acc += item;
//     return acc;
// }, 0);

// console.log(add);

// let students = [
//     {name: "Akshay", rollno: 12, marks: 80}, //90
//     {name: "Jenny", rollno: 10, marks: 69}, //70
//     {name: "Anu", rollno: 43, marks: 35}, //40
//     {name: "Hritik", rollno: 9, marks: 55}, //60
// ];

// const names = students.map((item) => {
//     return item.name.toUpperCase();
// });
// console.log(names);

// const filteredStudents = students.filter((item) => {
//     return item.marks>60;
// });
// console.log(filteredStudents);

// const strictFiltered = students.filter((item) => {
//     return item.marks>60 && item.rollno>10;
// });
// console.log(strictFiltered);

// const marksSum = students.reduce((marksSum, item) => {
//     marksSum += item.marks;
//     return marksSum;
// }, 0);
// console.log(marksSum);

// const studentNames = students.filter((item) => {
//     return item.marks>60;
// }).map((item) => {
//     return item.name;
// });
// console.log(studentNames);

// const stuNames = students.reduce((curr, item) => {
//     if(item.marks>60) {
//         curr.push(item.name);
//     }
//     return curr;
// }, []);
// console.log(stuNames);

// const stricter = students.map((item) => {
//     if(item.marks<60) {
//         item.marks += 20;
//     }
//     return item;
// }).reduce((curr, item) => {
//     if(item.marks>60) {
//         curr += item.marks;
//     }
//     return curr;
// }, 0);

// console.log(stricter);

// const prices = [2, 1, 6, 3];

// const total = prices.reduce((acc, item, i, prices) => {
//     console.log(item);
//     acc += item;
//     return acc;
// });

// console.log(total);

                                                /* Polyfill practice */
// const arr = [2, 1, 5, 3];

// Array.prototype.myMap = function (cb) {
//     let temp = [];

//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this));
//     }

//     return temp;
// }

// const res = arr.myMap((item, index, arr) => {
//     return item * 2;
// });
// console.log(res);

// Array.prototype.myFilter = function (cb) {
//     let temp = [];

//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) {
//             temp.push(this[i]);
//         }
//     }

//     return temp;
// }

// const res1 = arr.myFilter((item, index) => {
//     return item % 2 === 0;
// });
// console.log(res1);

// Array.prototype.myReduce = function (cb, initialVal) {
//     let acc = initialVal;

//     for (let i = 0; i < this.length; i++) {
//         acc = acc ? cb(acc, this[i], i, this) : this[i];
//     }

//     return acc;
// }

// const res2 = arr.myReduce((curr, item) => {
//     return curr + item;
// });
// console.log(res2);

// // function f(val1, val2) {
// //     let val3 = 0;
// //     console.log(val1, val2);
// // }
// // f(2);

// // show();
// // var x = 4, y = 5;
// // function show() {
// //     console.log(x, y);
// // }

// // var t = "hola!";

// // function display() {
// //     var name = "Anu";
// //     return function displayName() {
// //         console.log(t + " " + name);
// //     }
// // }

// // const f = display();
// // f();

// // function createBase(num) {
// //     return function f(val) {
// //         console.log(val);
// //         console.log(num+val);
// //     }
// // }

// // var addSix = createBase(6);
// // addSix(); // NaN
// // addSix(10);
// // addSix(21);

// /* creating a private counter */

// function count() {
//     var _counter = 0;

//     function increment() {
//         _counter += 1;
//         console.log(_counter);
//     }

//     function decrement() {
//         _counter -= 1;
//         console.log(_counter);
//     }

//     return {
//         decrement
//     }
// }

// const Count1 = new count();
// // Count1.increment();
// // Count1.increment();
// Count1.decrement();

// /* Run only once */
// let view;
// function like() {
//     let called = 0;

//     return function () {
//         if (called > 0) {
//             console.log("done!");
//         } else {
//             called++;
//             view = "coder";
//             console.log("Subscribe to " + view);
//         }
//     }
// }

// const isDone = like();
// isDone();
// isDone();