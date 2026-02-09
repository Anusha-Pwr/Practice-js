// const property = "firstname";
// const value = "Piyush";

// const user = {
//     [property]: value,
//     age: 24,
//     "like this video": true,
//     24: 4
// }
// console.log(user);
// for(key in user) {
//     console.log(user[key]);
// }


// console.log(user.firstname);
// console.log(user["like this video"]);
// console.log(user[24]);

// const anObj = { 100: "a", 2: "b", 7: "c" };
// console.log(Object.keys(anObj)); // ['2', '7', '100'] (gives an array)
// console.log(Object.values(anObj)); (gives an array)
// console.log(Object.entries(anObj)); (gives an array)

// const func = (function(a) {
//     delete a;
//     return a;
// })(5);

// console.log(func);

/* Question 1 */

// const person = {
//     name: "Anusha",
//     age: 22,
//     name: "Ginni"
// }

// console.log(person);

/* question 2 */

// const nums = {
//     a: 100,
//     b: 200,
//     title: "My Nums"
// }

// function multiplyByTwo(obj) {
//     for(let x in nums) {
//         if(typeof obj[x] === "number") {
//             obj[x] *= 2;
//         }
//     }
// }

// multiplyByTwo(nums);
// console.log(nums);

/* question 3 */

// const a = {};
// const b = {key: "b"};
// const k = {key: "c"};
// console.log(b.toString());
// console.log(JSON.stringify(b));
// console.log(JSON.stringify(k));

// const m = JSON.stringify(b);
// const n = JSON.stringify(k);

// a[m] = 123;
// a[n] = 456;

// console.log(a);
// console.log(a[b]);  // """Solution is to use map instead of plain object!""""
// console.log(a[k]);

/* using map to use objects as keys */
// const map = new Map();
// map.set(b, 123);
// map.set(k, 456);

// console.log(map); // Map(2) { { key: "b" } => 123, { key: "c" } => 456 }


/* Bonus question */ // using map

// const a = new Map();
// const b = { key: "b" };
// const k = { key: "c" };

// a.set(b, 123);
// a.set(k, 456);

// console.log(a);
// console.log(a.get(b));  // Output: 123
// console.log(a.get(k)); // 456

// /* question 4 */
// JSON.stringify(user) // converts object into a string, useful when storing the obj as value in local-storage
// JSON.parse(user) // converts string back into the object

/* question 5 */
// console.log([..."Lydiag"]);
// console.log(..."Lydiag");

/* question 6 */
const user = {
    name: "Lydia",
    age: 21
}
const admin = {
    admin: true,
    ...user
}
console.log(admin);

/* question 7 */
// const user = {
//     name: "Lydia",
//     level: 19,
//     health: 90
// }

// const data = JSON.stringify(user, ["level", "health"]);
// console.log(data);

/* question 8 */
// radius = 20;
// const shape = {
//     radius: 10,
//     diameter() {
//         return 2*this.radius; // points to shape object
//     },
//     perimeter: () => 2*Math.PI*this.radius // (NaN) this points to the window object
// }

// console.log(shape.diameter());
// console.log(shape.perimeter());

/* question 9 => object destructuring */
// const person = {
//     name: "Anu",
//     age: "42",
//     fullName: {
//         first: "Anu",
//         last: "Pal",
//         intro: {
//             myIntro: "I am Anu Pal"
//         }
//     }
// }

// const {fullName: {first, last, intro: {myIntro: yourIntro}}, age, name} = person;
// console.log(age);
// console.log(last);
// console.log(name);
// console.log(yourIntro);

/* question 10 */
// const getFruits = (fruitList, favourite, ...args) => { // rest args must be last param
//     console.log(fruitList, ...args, favourite); // no order in logging or return statements
//     console.log(...args);
// }

// getFruits(["apple", "banana"], "pear", "orange");

/* question 11 */
// const y = {greeting: "hey"};
// const d = y;
// y.greeting = "hello";
// console.log(d.greeting);

// console.log(y==d);


/* question 12 */
// let person = {name: "Lydia", age: 21};
// const members = [...person]; // objects are not iterable in the same way as arrays (typeError: person is not iterable)
// // const members = [person];
// // const members = {...person};
// person = null;
// console.log(members);
// console.log(person);

// /* question 13 */
// const value = {number: 10};

// function multiply(x = {...value}) {
//     return console.log(x.number *= 2);
// }

// multiply(); // 20
// multiply(); // 20
// multiply(value); // 20
// multiply(value); // 40

/* question 14 */
// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: "John",
//         age: 50
//     }
//     return person;
// }

// const personObj1 = {
//     name: "Alex",
//     age: 30
// }

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); // {name: "Alex", age: 25}
// console.log(personObj2); // {name: "John", age: 50}

/* question 15 */
// shallow copy: when we just assign an object to another object: a = d;
// deep copy: when we clone the original object to another, the cloned object does not have any reference to the previous object(object which was cloned)

/* question 16 => creating clone of an object(deep copy) */
// const a = {
//     name: "Piyush",
//     age: 24
// }

// const obj = Object.assign({}, a);
// console.log(a);
// obj.name = "Tina";
// console.log(obj);

// const obj = {
//     name: 'John',
//     spouse: null
//   };

//   obj.spouse = obj;
//   console.log(obj);

// const newObj = JSON.parse(JSON.stringify(a));
// console.log(newObj);
// newObj.age = 22;
// console.log(a);
// console.log(newObj);

// const cloned = {...a};
// console.log(cloned);



// let person = {name: "silvi", age: 20};
// let newObj = person;
// newObj.age = 25;
// person = {name: "hello", age: 2};
// console.log(person);
// console.log(newObj);

// let person = {
//     name: "Anu",
//     age: 21,
//     display: function() {
       
//         console.log(this);
//         console.log(this.name, this.age);
//     }
// }

// person.display(); // method invocation
// const f = person.display;
// f(); // function invocation

// function Pet(type, legs) {
//     this.type = type;
//     this.legs = legs;
  
//     this.logInfo = function() {
//       console.log(this === myCat); // => false
//       console.log(`The ${this.type} has ${this.legs} legs`);
//     }
//   }
  
//   const myCat = new Pet('Cat', 4);
//   // logs "The undefined has undefined legs"
//   // or throws a TypeError in strict mode
//   setTimeout(() => {
//     myCat.logInfo();
//   }, 1000);

//   function Pet(type, legs) {
//     this.type = type;
//     this.legs = legs;
  
//     this.logInfo = () => {
//       console.log(this === myCat); // => true
//       console.log(`The ${this.type} has ${this.legs} legs`);
//     };
//   }
  
//   const myCat = new Pet('Cat', 4);
//   const func = myCat.logInfo;
//   func();


//   function Country(name, traveled) {
//     this.name = name ? name : 'United Kingdom';
//     this.traveled = Boolean(traveled); // transform to a boolean
//   }
  
//   Country.prototype.travel = function() {
//     this.traveled = true;
//   };
  
//   // Constructor invocation
//   const france = new Country('France', false);
//   // Constructor invocation
//   const unitedKingdom = new Country;
  
//   france.travel();
//   console.log(france);
//   console.log(unitedKingdom);
// console.log(i);
// for(var i=2; i<10; i++) {
//     console.log("hello");
// }

// console.log(i);

                                                      /* spread and rest */

// function myBio(firstName, lastName, company) { 
//     return firstName+" "+lastName+" runs "+company;
//     // return `${firstName} ${lastName} runs ${company}`;
//   }
  
//   // Use spread to expand an array’s items into individual arguments:
//   console.log(myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]));

//   const { firstName, lastName, ...otherInfo } = {
//     firstName: "Oluwatobi",
//     lastName: "Sofela", 
//     companyName: "CodeSweetly",
//     profession: "Web Developer",
//     gender: "Male"
//   }
  
//   // Invoke the otherInfo variable:
//   console.log(otherInfo);
//   console.log(firstName);

// const myName = ["Sofela", "is", "my"];
// // const aboutMe = ["Oluwatobi", ...myName, "name."];
// const aboutMe = ["Oluwatobi", myName, "name."];
// myName[0] = "hero"

// console.log(aboutMe);

const myName = "Oluwatobi Sofela";

function spellName(a, b, c) {
  return a + b + c;
}

console.log(...myName);
console.log(spellName(...myName));      // returns: "Olu"

console.log(spellName(...myName[3]));   // returns: "wundefinedundefined"

console.log(spellName([...myName]));    // returns: "O,l,u,w,a,t,o,b,i, ,S,o,f,e,l,aundefinedundefined"

console.log(spellName({...myName}));    // returns: "[object Object]undefinedundefined"
