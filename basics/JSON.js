// let user = {
//     name: "John",
//     age: 30,
  
//     // toString() {
//     //   return `{name: "${this.name}", age: ${this.age}}`;
//     // }
// };
  
// alert(user);
// console.log(user); // {name: "John", age: 30}
// console.log(String(user));
// console.log(user.toString());

// alert(user);

/*

JSON.strinigfy(): converts objects into JSON strings

*/

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);
console.log(typeof json); // string
console.log(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/

/* Differences from normal object literal */

// Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
// Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.
// property values with undefined, and function properties are removed
// In arrays, undefined becomes null (not removed)
// Symbolic keys and values are also removed
// if an object has circular reference, converting it to JSON string gives error!

// a number in JSON is just a number
console.log( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
console.log( JSON.stringify('test') ) // "test"

console.log( JSON.stringify(true) ); // true

console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]

let user = {
    name: "John Smith",
    age: 35
};

const jsonStr = JSON.stringify(user);
const a = JSON.parse(jsonStr);
console.log(a);
