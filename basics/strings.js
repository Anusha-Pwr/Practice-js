/*
String Comparison:
  => < and > compare strings lexicographically using Unicode code points
  => localeCompare() performs locale-aware comparison using language-specific sorting rules
  => It can also handle numeric comparison using { numeric: true }
  => .sort() by default → string Unicode sort

  localeCompare: 
   => It compares strings based on locale-aware rules, not raw Unicode
   => By default, it uses the system/browser locale
   => It can be customized using locale and options
   => { numeric: true } allows numeric comparison inside strings

unicode comparison: (>, <, >=, <=)
  => white space has lower unicode value than characters
  => emojis have higher unicode value than normal characters

Loose equality(==) vs strict equality(===):
  => null and undefined are loosely equal to each other only
  => null === undefined  // false
     -> types are different 
     -> typeOf null = object
     -> typeOf undefined = undefined

*/

// const str = "hello world";

console.log("20" > "3"); // false
console.log("20" > 3); // true
console.log("apple" < "Apple"); // false

console.log("a" > "Z"); // true
console.log("a".localeCompare("Z")); // -1

console.log("ä".localeCompare("z", "de")); // -1

console.log("2".localeCompare("12")); // 1

console.log("2".localeCompare("12", undefined, {numeric: true})); // -1
console.log("hello".indexOf("", 7)); // 5
console.log('hello world hello'.indexOf('o', 99)); // -1

const arr = [1, 2, 10];
console.log(arr[3]); // undefined
console.log(arr[-1]); // undefined
console.log(arr["hell"]); // undefined

console.log(Number(NaN)); // NaN
console.log("ha".repeat(NaN)); // ""

console.log("hello".includes("", 6)); // true
console.log("hello".indexOf("", -1)); // 0
console.log("hello".indexOf(""));
console.log("hello".includes("h", 5)); // false

console.log("2".localeCompare("12")); // 1

/*
Focus on remembering:

slice supports negative

substring swaps

indexOf returns -1 (not false)

includes("") → true

replace replaces first only

NaN often becomes 0 in numeric positions 
*/

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

// let guestList = "guests:
// -John
// Peter
// Mary
// ";

// alert(guestList); // SyntaxError: Invalid or unexpected token

// let guestList = "Guests:\n * John\n * Pete\n * Mary";

// alert(guestList); // a multiline list of guests, same as above

// let str = 'Hi';
// str[0] = 'h';
// console.log(str); // Hi

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

const strr = "hello";
console.log(strr.substring(-4, -1));

// let str = "banana";

// console.log(str.includes("na", 3));
// console.log(str.includes("na", 4));

// /* question 1 */
// function ucFirst(str) {
//   if(!str) return; // check for empty string
//   const str1 = str[0].toUpperCase() + str.slice(1);
//   return str1;
// }

// console.log(ucFirst("john"));

// /* question 2 */

// function checkSpam(str) {
//   const str1 = str.toLowerCase();
//   if(str1.includes("viagra".toLowerCase()) || str1.includes("XXX".toLowerCase())) return true;
//   return false;
// }

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

// /* question 3 */

// function truncate(str, maxLength) {
//   if(str.length > maxLength) {
//     const substring = str.substr(0, maxLength-1) + "..." ;
//     return substring;
//   }
//   return str;
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20));

// console.log(truncate("Hi everyone!", 20));

/* question 3 */

// function extractCurrencyValue(str) {
//   const value = str.slice(1);
//   return value;
// }

// console.log(extractCurrencyValue('$120'));

// let str = "Hello";

// str.test = 5;

// alert(str.test); // undefined in non-strict mode

// console.log((9).toString().length);
// console.log(0.1 + 0.2 == 0.3);

let str = "hello";

console.log(str.substring(2));
console.log(str.substring(2, undefined));
console.log(str.substring(undefined, 3)); // hel

console.log(str.substring(1, "fellow")); // h

console.log(str.slice(1, undefined));
console.log(str.slice(undefined, 4));
console.log(str.slice("fellow", 4));
console.log(str.slice(1, "fellow"));
console.log(str.slice(4, 1));

/* replace */
// console.log("hi there! how ^are_you?".replace(/\b\w/g, c => c.toUpperCase()));

// console.log("hello world world".replace("world", "JS"));
// console.log("hello world world".replace(/world/g, "JS"));
// console.log("hello world world".replaceAll("world", "JS"));

// console.log("2026-02-16".replace(/(\d{4})-(\d{2})-(\d{2})/, "$3-$2-$1")); /* capturing groups */

// console.log("2 4 6".replace(/\d+/g, num => num * 2));
// "4 8 12"

// console.log("2 4 6".replace(/\d/g, num => num*2));

// /* remove all spaces */

// str.replace(/\s/g, "");

// /* remove non-digits */

// str.replace(/\D/g, "");

// /* capitalize first letter of each word */

// str.replace(/\b\w/g, c => c.toUpperCase());

// /* convert snake_case to camelCase */

// // console.log("hello_world_hi".replace(/_\w/g, c => c.toUpperCase()));

// console.log("hello_world_hi".replace(/_(\w)/g, (fullmatch, captured) => captured.toUpperCase()));

// /* replace does not modify original string */
// let st = "hello";
// st.replace("h", "H");
// console.log(st); // "hello"

/* Practice again */

function ucFirst(str) {
  if (!str) {
    return;
  }
  const newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}

console.log(ucFirst(""));

function checkSpam(str) {
  if (str.toUpperCase().includes("VIAGRA") || str.toUpperCase().includes("XXX"))
    return true;
  return false;
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
console.log(checkSpam(""));

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    const newStr = str.slice(0, maxLength - 1) + "...";
    return newStr;
  }
  return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20));

function extractCurrencyValue(str) {
  const newStr = str.slice(1);
  return newStr;
}

console.log(extractCurrencyValue("$120"));

/* Interview Questions */

function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString("hello"));

/* my solution */
// function checkPalindrome(str) {
//  const newStr = str.replace(/\s+/g, "").toLowerCase();
//  console.log(newStr);

//  let reversedString = "";
//  for(let i=newStr.length-1; i>=0; i--) {
//   reversedString += newStr[i];
//  }

//  console.log(reversedString);
//  if(newStr.localeCompare(reversedString) === 0) return true;
//  return false;
// }

// console.log(checkPalindrome("Is Madam")); // false
// console.log(checkPalindrome("Race car")); // true
// console.log(checkPalindrome("A man a plan a canal Panama")); // true;

/* 2-pointer solution */
/* No extra reversed string
Less memory usage */

// function checkPalindrome(str) {
//   const newStr = str.replace(/\s+/g, "").toLowerCase();

//   let left = 0, right = newStr.length-1;
//   while(left<right) {
//     if(newStr[left] !== newStr[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(checkPalindrome("Is Madam")); // false
// console.log(checkPalindrome("Race car")); // true
// console.log(checkPalindrome("A man a plan a canal Panama")); // true;

let given = "swiss";

// let freq = {};
// for(let i=0; i<given.length; i++) {
//   freq[given[i]] = 0;
// }

// console.log(freq);

// for(let i=0; i<given.length; i++) {
//   freq[given[i]] += 1;
// }

// console.log(freq);

// for(let key in freq) {
//   if(freq[key] === 1) {
//     console.log("ans: " + key);
//     break;
//   }
// }

let freq = {};

for (let i = 0; i < given.length; i++) {
  freq[given[i]] = (freq[given[i]] || 0) + 1; // initialization and increment in one loop
}

for (let char of given) {
  // iterate original string
  if (freq[char] === 1) {
    console.log(char);
    break;
  }
}

console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(" "));

/* implement indexOf manually */

// function myIndexOf(string, match) {
//   console.log("i am here");
//   for (let i = 0; i < string.length; i++) {
//     console.log("entered");
//     for (let j = 0; j < match.length; j++) {
//       if (string[i] !== match[j]) j--;
//       else {
//         if (j === match.length) {
//           console.log("it is a match");
//           const ans = i - j;
//           return ans;
//         }
//       }
//     }
//   }
// }

// function myIndexOf(string, match) {
//   console.log("i am here");
//   for (let i = 0; i < string.length; i++) {
//     console.log("entered");
//     for (let j = 0; j < match.length; j++) {
//       if (string[i] !== match[j]) break;
//       else {
//         console.log("match");
        
//         if(j===match.length-1) {
//           console.log(j);
//           const ans = i-j;
//           return ans;
//         } 
//       }
//     }
//   }
// }

function myIndexOf(string, match) {
  for(let i=0; i<string.length; i++) {
    for(let j=0; j<match.length; j++) {
      if(string[i+j] != match[j]) break;

      if(j === match.length-1) {
        return i;
      }
    }
  }
  return -1
}

console.log(myIndexOf("hello world", "world"));
console.log("hey");

/* count how many times a substring appears, including overlapping matches */

function count(string, match) {
  let counter = 0;
  for(let i=0; i<string.length; i++) {
    for(let j=0; j<match.length; j++) {
      if(string[i+j] !== match[j]) break;

      if(j === match.length-1) {
        counter++;
        break;
      }
    }
  }

  return counter;
}

console.log(count("banana", "ana")); // 2
console.log(count("aaaa", "aa")); // 3

/* check if two strings are anagrams */

function checkAnagram(str1, str2) {
  const newStr1 = str1.replace(/\s+/g, "").toLowerCase();
  const newStr2 = str2.replace(/\s+/g, "").toLowerCase();

  if(newStr1.length !== newStr2.length) { // critical
    return false;
  }

  let freq = {};

  for(let char of newStr1) {
    freq[char] = (freq[char] || 0) + 1;
  } 

  for(let char of newStr2) {
    if(!freq[char]) { // if a new character occurs or the count of a character has already become zero
      return false;
    }
    freq[char]--;
  }

  return true;
}

console.log(checkAnagram("listen", "silent")); // true
console.log(checkAnagram("A gentleman", "Elegant man")); // true

/* longest word in a sentence */

function longestWord(str) {
  const res = str.match(/\b\w+\b/g);

  if(!res) return ""; // check for empty string

  let max = res[0]; // assign first word to max
  for(let i=0; i<res.length; i++) {
    if(res[i].length > max.length) {
      max = res[i];
    }
  }

  return max;
}

console.log(longestWord("JS is very powerful"));
console.log(longestWord("JS is a very powerful language"));
console.log(longestWord("JS is very"));
console.log(longestWord("cat dog")); // cat

/* capitalize first letter of every word without regex */

function capitalize(str) {
  let newStr = "";
  for(let i=0; i<str.length; i++) {
    if(i===0) {
      newStr += str[i].toUpperCase();
    }
    else if(str[i-1] === " ") {
      newStr += str[i].toUpperCase();
    }
    else newStr += str[i];
  }

  return newStr;
}

console.log(capitalize("JS is very powerful"));
console.log(capitalize("cat dog"));
console.log(capitalize("   cat dog"));

/* remove duplicate characters */

// function removeDuplicates(str) { // O(n^2)

//   let newStr = "";

//   for(let i=0; i<str.length; i++) {
//       if(!newStr.includes(str[i])) {
//         newStr += str[i];
//       }
//   }

//   return newStr;
// }

function removeDuplicates(str) {  /* O(n) */
  let newStr = "", seen = {};

  for(let i=0; i<str.length; i++) {
    if(!seen[str[i]]) {
      seen[str[i]] = true;
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(removeDuplicates("programming"));
console.log(removeDuplicates("leetcode"));

/* Compress a string */

function compress(str) {
  let newStr = "";
  let currChar = str[0], count = 0;
  for(let i=0; i<str.length; i++) {
   

    if(str[i] !== currChar) {
      newStr += currChar + count;
      currChar = str[i];
      count = 1;
      console.log("now: " + currChar);
    }
    else {
      count++;
    }

  }

  return newStr+currChar+count;
}

console.log(compress("aabcccccaaa")); // a2b1c5a3
console.log(compress("abb")); // a1b2

/* check if one string is rotation of another */

/* The real mathematical property behind this trick:

Two strings are rotations of each other
iff

 -> They have equal length

-> One is substring of the other concatenated with itself

This is a proven string property.
 */

function isRotation(s1, s2) {
  if(s1.length !== s2.length) {
    return false;
  }

  const s = s1 + s1;
  if(s.includes(s2)) return true;
  return false;
}

console.log(isRotation("abcde", "cdeab")); // true
console.log(isRotation("abcde", "abced")); // false

// console.log("hello".indexOf("")); // 0
// console.log("hello".indexOf(" ")); // -1
// console.log("".indexOf("ell")); // -1
// console.log("".indexOf("", 1)); // 0
// console.log("fine".indexOf("in", 4)); // -1
// console.log("fine".indexOf("", 4)); // 4
// console.log(" a".indexOf("", 3)); // 2
// console.log(" ".indexOf("", 3)); // 1

function checkDuplicate(str) {
  let seen = {};

  for(let char of str) {
    if(!seen[char]) {
      seen[char] = true;
    } else {
      return true;
    }
  }

  return false;
}

function longestSubstring(str) {
  let left = 0, right = 0;

  let len = 0;
  while(right<str.length && left<str.length) {
    let sub = "";
    sub += str.slice(left, right+1);
    if(checkDuplicate(sub)) {
      // len = 0;
      left++;
    }
    else {
      if(sub.length > len) {
        len = sub.length;
      }
      right++;
    }

  }

  return len;
}

console.log(longestSubstring("pwwkew"));
console.log(longestSubstring("abcabcbb"));

/* practice */

let st = "As sly as a fox, as strong as an ox";
console.log(st.length);

let target = "as";

let pos = 0;
while(pos<st.length) {
  let foundInd = st.indexOf(target, pos);
  if(foundInd === -1) break;
  console.log(foundInd);
  pos = foundInd + 1;
}