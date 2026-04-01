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

-> split and join: str.split(delim, limit)
                   str.split("") splits the string into an array of letters.
                   str.split() the whole string becomes one element in the array.

                   arr.join(glue)
                   both split and join donot mutate the original value
   
*/

let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
console.log(arr.sort());

console.log( arr ); 

let str = "test";

console.log( str.split('') ); // t,e,s,t

const res = ["1","2","3"].map(parseInt); // parseInt(str, radix), radix must be between 2 and 36
console.log(res);

/* 
some(): checks whether at least one element satisfies a condition.
        returns true/false
        stops iterating, once a match is found

every(): checks whether all elements satisfy a condition.
         stops as soon as one element fails.
         returns true/false
*/