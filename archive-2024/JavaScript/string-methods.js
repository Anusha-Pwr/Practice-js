// const anyString = "Brave new world";
// console.log(anyString.charAt(-1)); // ""
// console.log(anyString.charAt()); // B
// console.log(anyString.at(-3));// returns letter from the last
// console.log(anyString.charAt(undefined)); // undefined converted to 0
// console.log(anyString.charCodeAt(2));

// const str1 = 'Hello';
// const str2 = 'World';

// console.log(str1.concat(' ', str2));
// // Expected output: "Hello World"

// console.log(str2.concat(', ', str1));

// console.log(str1); // Hello
// console.log(str2); // World

// const str11 = "Cats are the best!"; // 18
// console.log(str11.endsWith('best', 17)); // true, position is (index+1), default: string.length
// console.log(str11.endsWith()); 
const str11 = "Cats are the best!";
console.log(str11.includes('best', -4)); // true (-ve index not allowed)
console.log(str11.includes('best', 14)); // false

// /* counting the occurence of a letter in a string */

// const str = "To be, or not to be, that is the question.";

// let count = 0;
// let position = str.indexOf("e");

// console.log(position);

// while(position!==-1) {
//     count++;
//     position = str.indexOf("e", position+1);
//     console.log(position);
// }

// console.log(count);

const str1 = "The morning is upon us."; // The length of str1 is 23.
const str2 = str1.slice(4, 47);
console.log(str2); // returns the whole string
// const str3 = str1.slice(8, 1);
// console.log(str3); // empty string
// const str4 = str1.slice(8, 8);
// console.log(str4); // empty string

// const str5 = str1.slice(24, 8); 
// console.log(str5); // empty string

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words);

// const array = [0, 1, , , , 5, 6];
// array.map((item) => console.log(item));

// array.find((item) => console.log(item));


// const arr = ["a", "b", "c"];

// console.log(arr.includes("a", -100)); // true
// console.log(arr.includes("b", -100)); // true
// console.log(arr.includes("c", -100)); // true
// console.log(arr.includes("a", -2));// false
// console.log(arr.includes("a", -9));// true



const array = [1, 2, 3, 4, 5];
console.log(array.includes(3, -2));

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
  console.log(matrix.join(";"));

  const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());

const myFish = ["angel", "clown", "trumpet", "sturgeon"];
const removed = myFish.splice(1, 2, "parrot", "anemone", "blue");

const hello = [1,2,4,6,7];
delete hello[2];
console.log(hello);


const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5)); // 5
console.log(array1); // [4, 5, 1, 2, 3]

const length = array1.unshift();
console.log(length);
console.log(array1);

// const arr = new Array(10);
// console.log(arr);
// arr.map((item, i) => console.log(item, i));

const arr = [...new Array(10)];
console.log(arr);

// const arr = [...Array(10)];
// console.log(arr);
// arr.map((item, i) => console.log(item, i));

// const arr = Array(10);
// console.log(arr);

/* arithmetic operations on strings and numbers */

// console.log("b"+"a"+" "+"a"+"a");
// const a = +"";
// console.log(a); // 0
// // console.log(car);
// // const car="volvo";

// console.log(2 + "2" + 2); // 222
// console.log("5" + 3 - 2); // 52
// console.log("2" * "3" + "4"); // 64
// console.log("10" - "5" - "2"); // 3
// console.log(2 * "2" + "3"); // 43

// console.log("10" / 2);

// console.log("a" + +"b" + "c"); // aNaNc
// console.log("5" + 3 + 2);

// console.log(1+"2"); // 12
// console.log("10"-5); // 5
// console.log(true+true); //2
// console.log(2*"3"); // 6
// console.log("6"/2); // 3
// console.log(false=="0"); // true
// console.log("5"==5); // true
// console.log(false==="0"); // false
// console.log("5"===5); // false
// console.log(null+5); // 5
// console.log(undefined+1); // NaN
// console.log(1+null); // 1

/* polyfill practice */

const myArr = [4, 0, 2, -5];
const newArr = myArr.map((item) => item*2);
console.log(newArr);

Array.prototype.myMap = function(cb) {
  let res = [];

  for(let i=0; i<this.length; i++) {
    res[i] = cb(this[i], i, this);
  }
  return res;
}

const result = myArr.myMap((item, i, myArr) => item*2);
console.log(result);


Array.prototype.myFilter = function(cb) {
  let res = [];

  for(let i=0; i<this.length; i++) {
    if(cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
}

const result1 = myArr.myFilter((item, i, myArr) => item>0);
console.log(result1);

Array.prototype.myReduce = function(cb, initial) {
  let res = initial;

  for(let i=0; i<this.length; i++) {
    res = res ? cb(res, this[i], i, this) : this[i];
  }
  return res;
}

// const sum = myArr.reduce((curr, item) => {
//   curr += item;
//   return curr;
// }, 0);

// console.log(sum);

const sum = myArr.myReduce((curr, item) => curr+item, 0);
console.log(sum);

/* curry implementation */
function findSum(a,b,c) {
  return a+b+c;
}
// const res = findSum(1,2,3);
// console.log(res);

// function curriedSum(a) {
//   return function(b) {
//     return function(c) {
//       return a+b+c;
//     }
//   }
// }

// const res1 = curriedSum(1)(2)(3);
// console.log(res1);

// function curry(func) {
//   return function curriedFunc(...args) {
//     if(args.length===func.length) {
//       return func(...args);
//     } else {
//       return function(...next) {
//         return curriedFunc(...args, ...next);
//       }
//     }
//   }
// }

function curry() {
  return function curriedFunc(...args) {
    if(args.length===findSum.length) {
      return findSum(...args);
    } else {
      return function(...next) {
        return curriedFunc(...args, ...next);
      }
    }
  }
}

const newFunc = curry();
console.log(newFunc(1)(2)(3));

// function hello1(...args) { // rest
//   console.log(args);
// }

// hello1(...[1,2,3], ...[2,5,6]); // spread

// function infiniteCurrySum(a) {
//   return function(b) {
//     if(b) return infiniteCurrySum(a+b);
//     else return a;
//   }
// }

// const val = infiniteCurrySum(1)(2)(3)(4)();
// console.log(val);


function infiniteCurrySum(...args) {
  const sum = args.reduce((acc, curr) => acc + curr, 0);
  return function(...next) {
    if (next.length === 0) {
      return sum;
    } else {
      return infiniteCurrySum(sum, ...next);
    }
  };
}

const val = infiniteCurrySum(1)(2)(3)(4);
console.log(val); 
