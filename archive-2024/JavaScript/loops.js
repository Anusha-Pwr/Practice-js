const array = [1, 2, 3];
// array.customProperty = 'test';
// array.customProperty = 4;
// array[3] = 5;
array[3] = "test";


for (const value of array) {
  console.log(value); // Outputs: 1, 2, 3 (values only)
}

const sparseArray = [];
sparseArray[0] = "apple";
sparseArray[2] = "banana";

console.log(sparseArray);

for(const item of sparseArray) {
    console.log(item);
}

for(const item in sparseArray) {
    console.log(item);
}

/*************Diff b/w for..in and for..of loop**************/

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable[4] = "helloo";
iterable.foo = "hello";

for (const i in iterable) {
  console.log(i);
}
// "0", "1", "2", "foo", "arrCustom", "objCustom"

for (const i in iterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
//"0" "1" "2" "foo"

for (const i of iterable) {
  console.log(i);
}
// 3 5 7

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
// const func = myCat.logInfo;
// func();

// function Country(name, traveled) {
//     this.name = name ? name : 'United Kingdom';
//     console.log(traveled); // undefined
//     this.traveled = Boolean(traveled); // transform to a boolean
//   }
  
//   Country.prototype.travel = function() {
//     this.traveled = true;
//   };
  
//   // Constructor invocation
//   const france = new Country('France', false);
//   // Constructor invocation
//   const unitedKingdom = new Country;
//   console.log(unitedKingdom);
//   console.log(Boolean(undefined));
  
//   france.travel();

  function Vehicle(type, wheelsCount) {
    this.type = type;
    this.wheelsCount = wheelsCount;
    return this;
  }
  
  // Function invocation
  const car = Vehicle('Car', 4);
  console.log(car.type); // => 'Car'
  console.log(car.wheelsCount); // => 4
  console.log(car === window); // => true
  