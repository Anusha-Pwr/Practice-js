// const myName = "Oluwatobi Sofela";

// function spellName(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   return a + b + c;
// }

// console.log(spellName(...myName));      // returns: "Olu"

// console.log(spellName(...myName[3]));   // returns: "wundefinedundefined"

// console.log(spellName([...myName]));    // returns: "O,l,u,w,a,t,o,b,i, ,S,o,f,e,l,aundefinedundefined"

// console.log(spellName({...myName}));    // returns: "[object Object]undefinedundefined"


// const myName = { firstName: "Tobi", lastName: "Sofela" };
// // const bio = { ...myName, firstName: "Oluwatobi", website: "codesweetly.com" };
// const bio = { firstName: "Oluwatobi", website: "codesweetly.com", ...myName };

// console.log(bio);

// // The invocation above will return:
// // { firstName: "Oluwatobi", lastName: "Sofela", website: "codesweetly.com" };

// const myName = [["Sofela", "is", "my"]];
// const aboutMe = ["Oluwatobi", ...myName, "name."];

// console.log(aboutMe);

// myName[0].push("real");
// console.log(myName);
// console.log(aboutMe);


// const myName = { 
//     fullName: { firstName: "Oluwatobi", lastName: "Sofela" }
//   };
  
//   const bio = { ...myName };
  
//   myName.fullName.firstName = "Tobi";
  
//   console.log(myName); // { fullName: { firstName: "Tobi", lastName: "Sofela" } }
  
//   console.log(bio); // { fullName: { firstName: "Tobi", lastName: "Sofela" } }

                                                    /* object destructuring */

const obj = {
    name: "Anu",
    surname: "Pal",
    age: "23"
};

// const {name: name, surname: surname, age: age} = obj;
// console.log(name, surname, age);

// const {name: fName, surname: lName, age: age} = obj;
// console.log(fName, lName, age);

// const profile = {
//     lastName: { familyName: "Sofela" },
//   };
  
//  const {
//     lastName: {familyName: surname}
//  } = profile
  
//   console.log(surname); // Sofela

//   const { firstName, ...otherInfo } = {
//     firstName: "Oluwatobi",
//     lastName: "Sofela",
//     website: "codesweetly.com",
//   };
  
//   console.log(firstName); // "Oluwatobi"
//   console.log(otherInfo); // {lastName: "Sofela", website: "codesweetly.com"}

/* swapping the values of 2 variables WITHOUT using a temporary variable! */
// let firstName = "Anu";
// let lastName = "Pal";
// console.log(firstName, lastName);

// const obj1 = {
//     firstName: lastName,
//     lastName: firstName
// }

// console.log(obj1);

// ({firstName, lastName} = obj1);
// console.log(firstName, lastName);


// const profile = {
//     website: "codesweetly.com",
//     gender: "Male",
//     fullName: {
//       firstName: "Oluwatobi",
//       lastName: "Sofela",
//     },
//   };
  
//   // Define a function with two destructuring objects containing a parameter each:
//   function getUserBio({ website, fullName: { firstName, fruit="orange" } }) {
//     console.log(`${firstName} runs ${website} and his favourite fruit is ${fruit}`);
//   }
  
//   // Invoke getUserBio while passing the profile object as an argument:
//   getUserBio(profile);

//   const myObj = {name: "Anu", age: 23};
//   const myArrObj = [{...myObj}];
//   console.log(myArrObj);
//   console.log(Object.values(myObj));

  const myObj = {
    name: "Anu",
    age: 23,
    fruits: ["orange", "apple", "tomato"]
  }

  console.log(myObj);


  const deepCopy = JSON.parse(JSON.stringify(myObj));
  console.log(deepCopy);

  myObj.fruits.push("grapes");

  console.log(myObj);
  console.log(deepCopy);

  