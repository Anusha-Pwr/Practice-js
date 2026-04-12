/*
    * To delete a property: delete user.age;
    * Multi-word properties must be quoted
    * dot access doesn't work for multi-word properties
    * square bracket notation works for any string.
    
Square bracket notation: 
    * to obtain a property name as the result of any expression (dot notation cannot be used like that)
      let key = "likes birds";

      // same as user["likes birds"] = true;
      user[key] = true;

    * Computed properties: when we use square brackets in an object literal when creating an object.
      let fruit = prompt("Which fruit to buy?", "apple");

      let bag = {
      [fruit]: 5, // the name of the property is taken from the variable fruit
      };

      alert( bag.apple ); // 5 if fruit="apple"

    * more complex expressions inside square brackets
      let fruit = 'apple';
      let bag = {
      [fruit + 'Computers']: 5 // bag.appleComputers = 5
      };

Property value shorthand:
    function makeUser(name, age) {
    return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}

    * There are no restrictions on property names: they can be language-reserved words too.

Property existance test:
    * Reading a non-existing property just returns undefined.
    * another syntax to check: "key" in obj // returns true or false
    * if we omit quotes, key must contain the value to be used as property name.
    
for...in loop: used to iterate over an object.

Order of an object:
    * integer properties are sorted, others appear in creation order
    
      // Number(...) explicitly converts to a number
      // Math.trunc is a built-in function that removes the decimal part
      alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
      alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
      alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property
*/

/* question 1 */

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

/* question 2 */

let schedule = {};

function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }

    return true;
}

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

/* question 3 */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
}

console.log(sum);

/* question 4 */

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj) {
    for(key in obj) {
        if(typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
  }
  
  multiplyNumeric(menu);
  console.log(menu);
  
  // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

let userr = {}; // a user without "address" property

// console.log(userr.address);
// console.log(userr.address.street); // Error! (TypeError: cannot read properties of undefined)
