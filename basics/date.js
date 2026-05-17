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
