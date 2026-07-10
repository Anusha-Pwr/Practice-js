/* question 1 */
{
  const [a, b, c] = [10, 20];

  console.log(a, b, c); // 10 20 undefined
}

/* question 2 */
{
  const [a = "A", b = "B"] = [undefined, null];

  console.log(a, b); // A null
}

/* question 3 */
{
  const [a = 5, b = a * 2] = [];

  console.log(a, b); // 5 10
}

/* question 4 */
{
  const user = {
    name: "Anu",
    age: 25,
  };

  const { name: userName, city = "Roorkee" } = user;

  console.log(userName, city); // Anu Roorkee
}

/* question 5 */
{
  const user = {
    name: null,
  };

  const { name = "Guest" } = user;

  console.log(name); // null
}

/* question 6 */
{
  const user = {
    profile: {
      city: "Roorkee",
    },
  };

  const {
    profile: { city },
  } = user;

  console.log(city); // Roorkee
  // console.log(profile); // reference error
}

/* question 7 */
{
  const user = {};

  const { address: { city = "Unknown" } = {} } = user;

  console.log(city); // Unknown
  console.log(user); // {}
}

/* question 8 */
{
  const user = {
    address: null,
  };

  // const { address: { city = "Unknown" } = {} } = user;

  // console.log(city); // TypeError
}

/* question 9 */

const [first, , third, ...rest] = [10, 20, 30, 40, 50];

console.log(first, third, rest); // 10 30 [40, 50]

/* question 10 */
{
  const user = {
    name: "John",
    age: 30,
    city: "Delhi",
  };

  const { age, ...details } = user;

  console.log(details); // {name: "John", city: "Delhi"}
}

/* question 11 */

const user = {
  name: "John",
  age: 30
};

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
// name: John
// age: 30

/* question 12 */

const arr = ["A", "B"];

console.log([...arr]); // ["A", "B"]
console.log({ ...arr }); // {0: "A", 1: "B"}

/* question 13 */

const obj = {
  0: "A",
  1: "B",
  length: 2
};

// console.log([...obj]); // TypeError

/* question 14 */

console.log({ ...true }); // {}
console.log({ ..."hi" }); // {0: "h", 1: "i"}

/* question 15 */

const original = [
  { name: "John" }
];

const copy = [...original];

copy[0].name = "Anu";

console.log(original[0].name); // "Anu"

/* question 16 */

function show(first, ...rest) {
  console.log(first); // 10
  console.log(rest); // [20, 30]
}

const values = [10, 20, 30];

show(...values);
