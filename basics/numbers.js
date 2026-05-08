/*
Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”

Way to write a number in javascript:  we can shorten a number by appending the letter "e" to it and specifying the zeroes count:

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
let mcs = 1e-6; // five zeroes to the left from 1

What is a numeral system?

A numeral system defines:

=> Which digits are allowed

=> How values are represented

Base	Name	Digits used
2	  Binary	   0, 1
8	  Octal	       0–7
10	   Decimal	   0–9
16	 Hexadecimal   0–9, a–f

num.toString(base) => 2 >= base <=36 , by default: base is 10
    Returns: the string representation of the number (num) in the numeral system with the given base

ROUNDING:
Math.floor, Math.ceil,
Math.round(): rounds to the nearest integer,
Math.trunc(): removes anything after decimal without rounding

to round the number to n-th digit after the decimal?
num.toFixed(n) => returns string representation of the result
               => rounds up or down to the nearest value, similar to Math.round()

IMPRECISE CALCULATIONS:
Internally, a number is represented in 64-bit format IEEE-754, so there are exactly 64 bits to store a number:
52 bits for the digits, 11 bits for the position of decimal, 1 bit for the sign.

If a number is really huge, it may overflow the 64-bit storage and become a special numeric value Infinity

alert( 0.1 + 0.2 == 0.3 ); // false

REASON: A number is stored in memory in its binary form, a sequence of bits – ones and zeroes. But fractions like 0.1, 0.2 that look simple
        in the decimal numeric system are actually unending fractions in their binary form.
        division by powers 10 is guaranteed to work well in the decimal system, but division by 3 is not. For the same reason, in the
        binary numeral system, the division by powers of 2 is guaranteed to work, but 1/10 becomes an endless binary fraction.

The numeric format IEEE-754 solves this by rounding to the nearest possible number. These rounding rules normally don’t allow us to see that
“tiny precision loss”, but it exists.

FUNNY THING: alert( 9999999999999999 ); // shows 10000000000000000

REASON: Binary can represent all integers.
        Floating-point numbers cannot represent all integers at large sizes due to limited precision.

       => Numbers are stored exactly upto 2^53 - 1
          Number.MAX_SAFE_INTEGER === 9007199254740991
          That’s about 9 × 10¹⁵ (16 digits).
       => After that, the spacing between representable numbers increases

* When JavaScript converts the number to a string for printing, it prints the shortest decimal that maps back to the same floating-point value.
* OR JavaScript finds the shortest decimal string that, when converted back to binary, gives the same stored binary value.
* Sometimes, the floating-point errors cancel out or round nicely, so the printed result looks correct.
  e.g => 0.2 + 0.3 == 0.5 // errors cancel
         0.1 + 0.3 == 0.4 // round nicely

* “Ties to even” rule

When a number is exactly halfway between two representable numbers:
➡️ Pick the one whose last binary digit is EVEN

* JavaScript prints 0.1 for 0.10000000000000000555 because both literals round to the same IEEE-754 value,
  but 0.10000001 is far enough to round to a different representable number.

* JavaScript does not print the number you type; it prints the shortest decimal representation of the internally stored IEEE-754 value,
  which may differ from the original literal.

parseInt and parseFloat:  They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. 
alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:

alert( parseInt('a123') ); // NaN, the first symbol stops the process
** the second parameter of parseInt is the radix (base)

Other Math functions:
Math.random(), Math.max(a, b, c...) and Math.min(a, b, c...), Math.pow(n, power)


NaN => special numeric value in JavaScript that represents the result of an invalid or undefined numeric operation.
    => Any operation involving NaN → NaN
    => does not equal anything, even itself

Infinity (and -Infinity) => is a special numeric value that is greater (less) than anything.

isNaN(value): converts the value to a number and then check if it is NaN 
isFinite(value): converts value to number and checks if it is a regular number (not Infinity, -Infinity, NaN)

Stricter versions: Number.isNaN, Number.isFinite

Object.is: compares values like ===
           useful in 2 edge cases: for comparing a value to NaN
                                   for comparing 0 and -0
           Object.is(NaN, NaN) // true

/*


/* question 1 */
// let num1 = +prompt("Enter a number:");
// let num2 = +prompt("Enter another number:");
// let sum = num1 + num2;
// alert("Sum: " + sum);

// alert( 1.35.toFixed(1) );
// alert( 6.35.toFixed(1) );

// function random(min, max) {
//     let num = (Math.random() * (max-min)) + min;
//     return num;
// }

// function randomInteger(min, max) {
//     let num = Math.floor(Math.random() * (max-min+1)) + min;
//     return num;
// }

// // console.log(random(1, 5));
// console.log(randomInteger(1, 5));

// let num = 12.3684;
// console.log(num.toFixed(3));

// alert( 1e500 );
// alert( 9999999999999999 );

// let a = 0.1;
// let b = 0.2;
// console.log(a);
// console.log(b);
// console.log(a+b);

// console.log(9999999999999999 === 10000000000000000);

// alert( parseInt('a123') ); // NaN, the first symbol stops the process

let x = 9999999999999998;
let y = 9999999999999999;
let z = 10000000000000000;

console.log(x === y); // false
console.log(y === z); // true

console.log(x); // 9999999999999998
console.log(y); // 10000000000000000
console.log(z); // 10000000000000000

// function random(min, max) {
//     const num = Math.random() * (max-min) + min;
//     return num;
// }

// function randomInteger(min, max) {
//     const num = Math.floor(Math.random() * (max-min+1) + min);
//     return num;
// }

// // console.log(random(1, 5));
// console.log(randomInteger(1, 5));

// let a = 25;
// console.log(a.toString());
// 25..toString();

// console.log(1e500);

// let b = 0.1;
// console.log(b); // 0.1
// console.log(b.toFixed(20)); // 0.10000000000000000555

// alert( Number.isNaN("str" / 2) );
// console.log("hey");
// console.log(typeof iiiinfinity); // undefined
// console.log(typeof Infinity);
// alert(9e1118); // infinity
// alert(9*10^1118); // 1028

// function readNumber() {
//     const a = +prompt("Enter a valid number: ");
//     if(Number.isFinite(a)) {
//         return a;
//     } else {
//         return readNumber();
//     }
// }

// const num = readNumber();
// console.log(num);

/* question */
/* promot returns either a string or null(if cancel is clicked) */
// function readNumber() {

//     while(true) {
//         const num = prompt("Enter a valid number: ");
//         if(num === null || num.trim() === "") {  // cancel or empty
//             return null;
//         }

//         const input = Number(num);
//         if(Number.isFinite(input)) {
//             return input;
//         }
//     }

// }

// const num = readNumber();
// console.log(num);

console.log((12.345).toFixed(2)); // 12.35
console.log(0.10000000000000000555); // 0.1
console.log(0.10000001); // 0.10000001

console.log(NaN ** 0); // 1
console.log(Infinity / 2);

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.3); // 0.4

console.log(Number("0.4"));

let a = Number.MAX_SAFE_INTEGER;
console.log(a + 1);
console.log(a + 2);

/* parseInt questions */

console.log(+"100px"); // NaN
console.log(parseInt("100px", 2)); // 4
console.log(parseInt("12", 2)); // 1 (1 x 2^0)
console.log(parseInt("234", 2)); // NaN

["1", "2", "3"].map(parseInt); // [1, NaN, NaN]

let num = 0.1;
console.log(num.toPrecision(20));

