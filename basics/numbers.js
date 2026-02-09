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

parseInt and parseFloat:  They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. 
alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:

alert( parseInt('a123') ); // NaN, the first symbol stops the process

Other Math functions:
Math.random(), Math.max(a, b, c...) and Math.min(a, b, c...), Math.pow(n, power)


NaN => special numeric value in JavaScript that represents the result of an invalid or undefined numeric operation.
    => Any operation involving NaN → NaN

Infinity (and -Infinity) => is a special numeric value that is greater (less) than anything.



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

// let x = 9999999999999998;
// let y = 9999999999999999;
// let z = 10000000000000000; 

// console.log(x === y); // true
// console.log(y === z); // true

// console.log(x);
// console.log(y);
// console.log(z);

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
// function readNumber() {

//     while(true) {
//         const num = prompt("Enter a valid number: ");
//         if(num === null || num === "") {  // cancel or empty
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