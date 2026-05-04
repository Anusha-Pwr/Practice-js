let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

const entries = Object.entries(prices);
const newArr = entries.map((entry) => [entry[0], entry[1]*2]);
const doublePrices = Object.fromEntries(newArr);
console.log(doublePrices);

/* question 1 */

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(obj) {
    const res = Object.values(obj).reduce((sum, salary) => sum+salary, 0);
    return res;
}
  
console.log( sumSalaries(salaries) ); // 650

/* question 2 */

let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    return Object.keys(obj).length;
}
  
console.log( count(user) ); // 2