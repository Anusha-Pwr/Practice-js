/*
splice:  It can do everything: insert, remove and replace elements.
 -> syntax: arr.splice(start[, deleteCount, elem1, ..., elemN])
 -> negative indices allowed
 -> return value is the array of removed elements

slice: arr.slice([start], [end])
 -> negative indices allowed
 -> arr.slice() => creates a copy of arr

concat: creates a new array that includes values from other arrays and additional items.

Iteration:

forEach: forEach() executes a callback for each element but always returns undefined.
         forEach() cannot be stopped with break, continue, or return.
         The return only exits the callback, not the loop.
*/

// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert); // alert becomes the callback function, which is called for each element.

// [1,2,3,4].forEach(num => {
//     if (num === 3) break; // ❌ SyntaxError: Illegal break statement
//   });

/* why break cannot be used in forEach? 
  => Because forEach is not a loop statement.
     It is a method that executes a callback function for every element.
     break is not inside a loop, but it is inside a callback function.

  => return also does not stop the loop.
  => it only exits the callback function, the loop still continues.
*/

/*

Searching in an array:

-> indexOf() / lastIndexOf(), includes():
  A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:

  const arr = [NaN];
  alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
  alert( arr.includes(NaN) );// true (correct) 

-> find(): used to find an object with a specific consition, in an array of objects.
   let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

  findIndex():

  filter: returns an array of all matching elements


Transform an array:

-> map(): returns an array of results.

-> sort(): sorts the array in place, changing the elements' order.
           returns the sorted array.
           modifies the array.
   arr.sort((a,b) => a-b) // ascending order

-> reverse(): reverses the order of elements.
              returns the reveresed array after the reversal.

-> split and join: str.split(delim, limit on array length)
                   str.split("") splits the string into an array of letters.
                   str.split() the whole string becomes one element in the array.

                   arr.join(glue)
                   both split and join donot mutate the original value
   
*/

// let arr = [ 1, 2, 15 ];

// // the method reorders the content of arr
// console.log(arr.sort());

// console.log( arr ); 

// let str = "test";

// console.log( str.split('') ); // t,e,s,t

// const res = ["1","2","3"].map(parseInt); // parseInt(str, radix), radix must be between 2 and 36
// console.log(res);

/* 
some(): checks whether at least one element satisfies a condition.
        returns true/false
        stops iterating, once a match is found

every(): checks whether all elements satisfy a condition.
         stops as soon as one element fails.
         returns true/false
*/

                                         /* questions */ 
                                         
/* question 1 */

// function camelize(str) {
//     let arr = str.split("");
//     // const index = arr.findIndex((item) => item==="-");
//     const indices = arr.filter((item, index) => {
//         if(item==="-") return index;
//     });
//     console.log(indices);

//     indices.map((index) =>  arr.splice(index, 1))
//     // arr.splice(index, 1);
//     console.log(arr);
//     // arr[index] = arr[index].toUpperCase();
//     // return arr.join("");
// }

// function camelize(str) {
//     let arr = str.split("-");
//     const newArr = arr.map((item, index) => index===0 ? item : item[0].toUpperCase() + item.slice(1));
//     return newArr.join("");
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
    
/* question 2 */

// function camelize(str) {
//    const arr = str.split("-");
//    const newArr = arr.filter((word) => word!=="");
//    const newStr = newArr.map((word, index) => index===0 ? word : word[0].toUpperCase() + word.slice(1));
//    return newStr.join("");
// }

// console.log(camelize("border--left--width"));
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));
// console.log(camelize("---hello---world---"));

/* question 3 */

// function filterRange(arr, a, b) {
//     const res = arr.filter((item) => item>=a && item<=b);
//     return res;
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (matching values)

// console.log( arr ); // 5,3,8,1 (not modified)

/* question 4 */

// function filterRangeInPlace(arr, a, b) {
//     arr.forEach((item, index) => {
//         if(item<a || item>b) arr.splice(index, 1);
//     });

//     console.log(arr);

//     // return arr;
// }

// function filterRangeInPlace(arr, a, b) {
//     let i=0;
//     while(i<arr.length) {
//         if(arr[i]<a || arr[i]>b) {
//             arr.splice(i, 1);
//         } else i++;
//     }
// }


// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// console.log(arr); // [3, 1]

/* question 5 */

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b-a);

// // ... your code to sort it in decreasing order

// console.log(arr); // 8, 5, 2, 1, -10

/* question 6 */

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   arr.splice(i, 1);  // we end up deleting only the elements at even indices of the original array!
// }

// console.log(arr); // [2, 4]

/* 
Interview takeaway:

You should never mutate an array while using:

forEach
map
filter
reduce

These are meant for non-mutating iteration.

Mutation is safer with:

for
while
reverse loop
*/

/* question 7 */

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//     const res = [...arr].sort();
//     return res;
// }

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)

/* question 8 */

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((item) => item.name);

// console.log( names ); // John, Pete, Mary

/* question 9  */

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map((user) => ({id: user.id, fullName: user.name+ " " + user.surname}));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith
// console.log(usersMapped);

/* question 10 */

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age-b.age);
// }

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

/* question 10 */

// let arr = [1, 2, 3];

// function shuffle(arr) {
//     arr.sort();
// }

// shuffle(arr);
// console.log(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// console.log(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// console.log(arr);
// // arr = [3, 1, 2]

/* question 11 */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
    const res = arr.reduce((sum, item) => sum+=item.age, 0);
    const avg = res/arr.length;
    return avg;
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

/* question 12 */

/* question 13 */

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

  function groupById(users) {
    const res = users.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
    },{});
    console.log(res);
    return res;
  }
  
  let usersById = groupById(users);
  console.log(usersById);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */