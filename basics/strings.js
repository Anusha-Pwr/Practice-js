// const str = "hello world";

// const substr = str.substring(1, 4);
// console.log(substr); // ell

// const substr1 = str.substring(-1, 4);
// console.log(substr1); // hell

// const substr2 = str.slice(4, 1);
// console.log(substr2);

// for(let char of str) {
//   console.log(char);
// }
// console.log(str);

// let str = "Hi";
// str[0] = "B";
// console.log(str[0]);

// let guestList = `guests:
// -John
// Peter
// Mary
// `;

// alert(guestList); // a list of guests, multiple lines

// let guestList = "Guests:\n * John\n * Pete\n * Mary";

// alert(guestList); // a multiline list of guests, same as above

// console.log("My\n");
// console.log("name");

// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as'; // let's look for it

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Found at ${foundPos}` );
//   pos = foundPos + 1; // continue the search from the next position
// }

/* question 1 */
function ucFirst(str) {
  if(!str) return; // check for empty string
  const str1 = str[0].toUpperCase() + str.slice(1);
  return str1;
}

console.log(ucFirst("john")); 

/* question 2 */

function checkSpam(str) {
  const str1 = str.toLowerCase();
  if(str1.includes("viagra".toLowerCase()) || str1.includes("XXX".toLowerCase())) return true;
  return false;
}

console.log(checkSpam('buy ViAgRA now')); 
console.log(checkSpam('free xxxxx')); 
console.log(checkSpam("innocent rabbit")); 

/* question 3 */

function truncate(str, maxLength) {
  if(str.length > maxLength) {
    const substring = str.substr(0, maxLength-1) + "..." ;
    return substring;
  }
  return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20)); 

/* question 3 */

function extractCurrencyValue(str) {
  const value = str.slice(1);
  return value;
}

console.log(extractCurrencyValue('$120'));

let str = "Hello";

str.test = 5;

alert(str.test); // undefined in non-strict mode

console.log((9).toString().length);
console.log(0.1 + 0.2 == 0.3);

