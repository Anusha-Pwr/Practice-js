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

/*

"string date" → UTC-based
(year, month, day) → local-based

UTC = global standard time (Coordinated Universal Time)
Local time = UTC ± offset
JS often:
stores in UTC
shows in local time

* Creating dates from "YYYY-MM-DD" strings can cause timezone shifts because JavaScript treats them as UTC

*/

/* assumes string in UTC, then shifts to loal time when displaying */
let datee = new Date("2017-01-26"); // 26 Jan, 2017 in UTC
console.log(datee); // Thu Jan 26 2017 05:30:00 GMT+0530 (India Standard Time)

/* no shifting, directly displays in local time */
let myD = new Date(2017, 0, 26);
console.log(myD); // Thu Jan 26 2017 00:00:00 GMT+0530 (India Standard Time)

/* 

Accessing date components: 
-> date.getFullYear(), date.getMonth() = 0 to 11, date.getDate(), etc
-> return the components relative to the local time zone
-> getTimezoneOffset() = Returns the difference between UTC and the local time zone, in minutes:
   // if you are in timezone UTC-1, outputs 60
   // if you are in timezone UTC+3, outputs -180
      alert( new Date().getTimezoneOffset() );

Setting date components:
date.setFullYear(year, month, date), date.setMonth(month, date), setDate(date), etc

Autocorrection: we can set out-of-range values, and date object will auto-adjust itself!
                
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert( date ); // 1 Mar 2016

** That feature is often used to get the date after the given period of time. 

*/

const dd = new Date(2026, 4, 0);
console.log(dd); // Thu Apr 30 2026 00:00:00 GMT+0530 (India Standard Time)

// let myDate = new Date();
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getUTCHours());
// console.log(myDate.getTime());
// console.log(myDate.getTimezoneOffset()); // difference between UTC and local time zone in minutes

/*

Date.now(): -> it returns the current timestamp
            -> equivalent to: new Date().getTime()

let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

alert( `The loop took ${end - start} ms` ); // subtract numbers, not dates


*/

/*

Date.parse(dateString): converts a date string into timestamp (milliseconds)
const ts = Date.parse("2017-01-26"); // treated as in UTC time
console.log(ts); // 1485388800000

Equivalent to: new Date(dateString).getTime()

* for invalid input returns NaN

new Date(string) → returns a Date object
Date.parse(string) → returns a timestamp (number)

*/

/* question 1 */

// let date = new Date(2012, 1, 20, 3, 12);
// console.log(date);

/* question 2 */

// function getWeekDay(date) {
//  let day = date.getDay();
//  switch(day) {
//     case 0: return "SU";
//     case 1: return "MO";
//     case 2: return "TU";
//     case 3: return "WE";
//     case 4: return "TH";
//     case 5: return "FR";
//     case 6: return "SA";
//  }
// }

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// console.log( getWeekDay(date) );        // should output "TU"

/* question 3 */

// function getLocalDay(date) {
//     let day = date.getDay();
    
//     if(day===0) day = 7;

//     return day;  
// }

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// console.log( getLocalDay(date) );       // tuesday, should show 2

/* question 4 */

// let date = new Date(2015, 0, 2);

/* another solution */
// function getDateAgo(date, day) {
//     let newDate = date.getDate() - day;
//     let resDate = new Date(date.getFullYear(), date.getMonth(), newDate);
//     return resDate;

// }

/* 
    const d = new Date(date) // takes date object, converts to timestamp, returns the date from that timestamp
                             // creates a new date object from the same timestamp as original
    Equivalent to: new Date(date.getTime())
    
    Date constructor can accept:
    number → timestamp
    string → parsed date
    Date object → copied date

*/

// function getDateAgo(date, day) {
//     let copyDate = new Date(date); // make a copy/clone of the given date object, then manipulate
//     copyDate.setDate(date.getDate() - day);
//     return copyDate;

// }

// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

/* question 5 */

// function getLastDayOfMonth(year, month) {
   
//     let newDate = new Date(year, month+1);
//     console.log(newDate);
//     newDate.setDate(newDate.getDate()-1);
//     let lastDay = newDate.getDate();

//     return lastDay;
// }

// console.log(getLastDayOfMonth(2016, 5));

/* question 6 */

// function getSecondsToday() {
//     let now = new Date();
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     let diff = now-today;
//     let res = Math.floor(diff/1000);

//     return res;
   
// }

// console.log(getSecondsToday());

/* question 7 */

// function getSecondsToTomorrow() {
//     let now = new Date();
//     console.log(now);
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
//    console.log(tomorrow)

//     let diff = tomorrow-now;
//     let res = Math.floor(diff/1000);
//     return res;
// }

// console.log(getSecondsToTomorrow());

/* question 8 */

// function padding(num) {
//     if(num<10) return "0" + num;
//     return num;
// }

// function formatDate(date) {
//     let now = new Date();
//     let past = date;
//     let diff = now-past;
//     let resDiff = Math.floor(diff/1000);
//     if(resDiff < 1) {
//         return "right now";
//     } else if(resDiff < 60) {
//         return `${resDiff} sec. ago`
//     } else if(resDiff < 3600) {
//         return `${Math.floor(resDiff/60)} min. ago`
//     } else {
//         let year = String(date.getFullYear()).slice(2);

//         let month = padding(date.getMonth()+1);
//         let numDate = padding(date.getDate());
//         let hours = padding(date.getHours());
//         let mins = padding(date.getMinutes());

//         return `${numDate}.${month}.${year} ${hours}:${mins}`;
//     }
// }

// console.log( formatDate(new Date(new Date - 1)) ); // "right now"

// console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// // yesterday's date like 31.12.16 20:00
// console.log( formatDate(new Date(new Date - 86400 * 1000)) );
