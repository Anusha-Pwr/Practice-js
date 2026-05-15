/*

<----- past ----------- 1970 ----------- future ----->

   -86400000           0              86400000
   (Dec 31)        (Jan 1)           (Jan 2)

Timestamp: the number of milliseconds that has passed since Jan 1 1970 (UTC)

*/

const d = new Date(); 

console.log(d); // Wed May 06 2026 10:28:59 GMT+0530 (India Standard Time)
console.log(d.getTime()); // 1778043539995

// console.log(d.getFullYear()); // year
// console.log(d.getMonth());    // month (0-11)
// console.log(d.getDate());     // day of month

// const date = new Date(0);
// console.log(date); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

