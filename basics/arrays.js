/*
In JavaScript, const means:
 The variable binding cannot be reassigned.

But if the value is an object or array, its internal contents can still change.

=> Arrays can act like both queue(FIFO) and stack(LIFO)
=> Methods which work with end of the array: push(), pop()
=> Methods which work with start of the array: unshift(), shift()
=> push(), unshift() -> return new length
=> pop(), shift() -> return removed element

** arr.at(pos) => accessing elements of an array (pos can be -ve)

** length property of arrays is writable.
  -> decreasing length → removes elements
     increasing length → creates empty slots (undefined)
** string length is read-only, array length is writable
** simplest way to clear an array: arr.length = 0
  
** JS arrays can have holes.
** Array holes are neither undefined nor null => they are missing elements, the index simply doesn't exist!
** Key difference: check if the index exists => 1 in arr => false
** Reading a missing property returns undefined
** console.log([,,].length); // 2
** Different methods treat holes differently.
  -> Method	             Hole behavior
    forEach	               skips
     map	               skips
    for...of	           returns undefined
    for loop	           returns undefined

** typeOf [] => object
** Correct way to check array: Array.isArray(arr)


*/

const arr = [2, 4, 5, 1];
console.log(arr.length);

console.log(arr.push(0));
console.log(arr);

console.log(arr.pop());
console.log(arr);

/* question */

const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
styles[Math.floor(styles.length/2)] = "Classics";
console.log(styles);
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);

/* question */
// const num = [];
// while(true) {
   
//     let input = prompt("Enter a number: ");

//     if(input==="" || input === null || !isFinite(input)) break;

//     num.push(+input);

// }

// let sum = 0;
// for(let number of num) {
//     sum += number;
// }
// console.log(sum);

console.log(Number(undefined)); // NaN
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(Number.isFinite(undefined)); // false

// function sumInput() {

//   let arr = [];
//   while(true) {
//     const num = prompt("Enter a number: ");
//     if(num===null || num.trim() === "" || !isFinite(num)) break;
//     arr.push(+num);
//   }

//   let sum = 0;
//   for(let x of arr) {
//     sum += x;
//   }

//   return sum;
  
// }

// console.log(sumInput());

new Array(3).forEach(() => console.log("hi"));
console.log("heyaa");

const res = new Array(4).map((item) => 2);
console.log(res);

let myArr = new Array(3);
for(let item of myArr) {
  console.log(item); // undefined
}

console.log(new Array(3).concat(2, 0));