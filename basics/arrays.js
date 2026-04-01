/*
In JavaScript, const means:
 The variable binding cannot be reassigned.

But if the value is an object or array, its internal contents can still change.

=> Arrays can act like both queue(FIFO) and stack(LIFO)
=> Methods which work with end of the array: push(), pop()
=> Methods which work with start of the array: unshift(), shift()
=> push(), unshift() -> return new length
=> pop(), shift() -> return removed element

** length property of arrays is writable.
  -> decreasing length → removes elements
     increasing length → creates empty slots
  
** JS arrays can have holes.
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
const num = [];
while(true) {
   
    let input = prompt("Enter a number: ");

    if(input==="" || input === null || !isFinite(input)) break;

    num.push(+input);

}

let sum = 0;
for(let number of num) {
    sum += number;
}
console.log(sum);