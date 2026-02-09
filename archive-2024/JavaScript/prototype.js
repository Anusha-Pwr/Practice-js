// const obj = {
//     name: "Piyush",
//     age: 23
// }

// const o = {
//     a: 1,
//     b: 2,
//     // __proto__ sets the [[Prototype]]. It's specified here
//     // as another object literal.
//     __proto__: {
//       b: 3,
//       c: 4,
//       __proto__: {
//         d: 5,
//       },
//     },
//   };
  
//   // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null
  
//   console.log(o.d); // 5

  // const o = {
  //   a: 1,
  //   b: 2,
  //   // __proto__ sets the [[Prototype]]. It's specified here
  //   // as another object literal.
  //   __proto__: {
  //     b: 3,
  //     c: 4,
  //   },
  // };
  
  // o.[[Prototype]] has properties b and c.
  // o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain
  // what that means later).
  // Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
  // This is the end of the prototype chain, as null,
  // by definition, has no [[Prototype]].
  // Thus, the full prototype chain looks like:
  // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null
  
  // console.log(o.a); // 1
  // // Is there an 'a' own property on o? Yes, and its value is 1.
  
  // console.log(o.b); // 2
  // // Is there a 'b' own property on o? Yes, and its value is 2.
  // // The prototype also has a 'b' property, but it's not visited.
  // // This is called Property Shadowing
  
  // console.log(o.c); // 4
  // // Is there a 'c' own property on o? No, check its prototype.
  // // Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.
  
  // console.log(o.d); // undefined


  // const parent = {
  //   value: 2,
  //   method() {
  //     return this.value + 1;
  //   },
  // };
  
  // console.log(parent.method()); // 3
  // When calling parent.method in this case, 'this' refers to parent
  
  // child is an object that inherits from parent
  // const child = {
  //   __proto__: parent,
  // };
  // console.log(child.method()); // 3
  // When child.method is called, 'this' refers to child.
  // So when child inherits the method of parent,
  // The property 'value' is sought on child. However, since child
  // doesn't have an own property called 'value', the property is
  // found on the [[Prototype]], which is parent.value.
  
//   child.value = 4; 
//   console.log(child.method()); // 5

//   const doSomething = function() {};
//   doSomething.prototype.foo = "bar";
//   console.log(doSomething.prototype);
//   console.log(doSomething);
//   console.log(doSomething.foo);

//   const newSomething = new doSomething();
//   newSomething.prop = "hello";
//   console.log(newSomething);

//   const l = { a: 1 };
//   const b = ["yo", "whadup", "?"]; // key
// //   const b = {
// //     name: "anu", // [Object Object]
// //     age: 2
// //   }
//   const p = { [b]: 2, __proto__: l };
//   console.log(p);

                          /* example of prototype inheritance */
// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.sayName = function() {
//     return "My name is " + this.name;
// }

// const animal1 = new Animal("Tiger");

// console.log(animal1.sayName());

// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//     return "Woof!";
// }

// const dog1 = new Dog("Buddy", "Loori");
// console.log(dog1.sayName());
// console.log(dog1.bark());

// console.log(dog1.breed); // Loori

// console.log(dog1 instanceof Dog); // true
// console.log(dog1 instanceof Animal); // true
// console.log(animal1.bark()); // not a function


// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.sayName = function() {
//     return "My name is " + this.name;
// }

// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// // Direct assignment
// Dog.prototype = Animal.prototype;

// // Adding bark method to Dog.prototype
// Dog.prototype.bark = function() {
//     return "Woof!";
// }

// const animal1 = new Animal("Tiger");
// console.log(animal1.sayName()); // Output: "My name is Tiger"

// // animal1 will bark, which is not expected!
// console.log(animal1.bark()); // Woof!

/* question 1 */

// function Vehicle() {}
// Vehicle.prototype.drive = function() {
//     console.log("Driving a vehicle");
// }

// function Car() {}
// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// Car.prototype.drive = function() {
//     console.log("Driving a car");
// }

// var vehicle = new Vehicle();
// var car = new Car();
// vehicle.drive();
// car.drive();

// /* question 2 */

// function A() {}
// A.prototype.foo = 10;

// function B() {}
// B.prototype = Object.create(A.prototype);
// B.prototype.constructor = B;
// B.prototype.foo = 20;

// function C() {}
// C.prototype = Object.create(B.prototype);
// C.prototype.constructor = C;
// C.prototype.foo = 30;

// var obj1 = new A();
// var obj2 = new B();
// var obj3 = new C();

// console.log(obj1.foo); // 10
// console.log(obj2.foo); // 20
// console.log(obj3.foo); // 30

// /* deep clone of an object */
// var original = {
//     a: 1,
//     b: {
//       c: 2,
//       d: [3, 4],
//     },
//   };

//   function cloneDeep(obj) {
//     if(obj===null || typeof obj!=='object') return obj;

//     var clonedObj = Array.isArray(obj) ? [] : {};

//     for(var key in obj) {
//         if(obj.hasOwnProperty(key)) {
//             clonedObj[key] = cloneDeep(obj[key]);
//         }
//     }

//     return clonedObj;
//   }

//   const newObj = cloneDeep(original);
//   original.a = 2;
//   console.log(newObj);

//   console.log(typeof [3, 4]); // object

//   const obj = {
//     hasOwnProperty: function() {
//         return false;
//     },
//     ownProp: 'value'
// };

// console.log(Object.prototype.hasOwnProperty.call(obj, 'ownProp')); // true
// console.log(Object.prototype.hasOwnProperty.call(obj, 'hasOwnProperty')); // true

//                         /* 2 ways to create an object with no prototype */

// // const myObj = Object.create(null);
// const myObj = {};
// Object.setPrototypeOf(myObj, null);

function doSomething() {}
console.log(doSomething.prototype);
// It does not matter how you declare the function; a
// function in JavaScript will always have a default
// prototype property — with one exception: an arrow
// function doesn't have a default prototype property:
const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype); // undefined
