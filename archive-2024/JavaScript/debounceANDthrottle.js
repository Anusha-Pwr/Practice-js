// const btn = document.querySelector(".btn-press");
// const numPress = document.querySelector(".pressed");
// const triggeredCount = document.querySelector(".count");

// let numCount = 0;
// let triggerCount = 0;

// // const debouncedCount = _.debounce(() => {
// //     console.log("hello");
// //     triggeredCount.innerHTML = ++triggerCount;
// // }, 800);

// const throttledCount = _.throttle(() => {
//     console.log("trigger");
//     triggeredCount.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//     numPress.innerHTML = ++numCount;
//     // debouncedCount();
//     throttledCount();
// });

// /* debounce polyfill */

// function myDebounce(cb, d, ...args) {
//     let timer;

//     return function() {
//        if(timer) clearTimeout(timer);
//        timer = setTimeout(() => {
//             cb(...args);
//         }, d);
//     }
// }

// function myThrottle(cb, d, ...args) {
//     let last = 0;

//     return function() {
//         let now = new Date().getTime();
//         if(now-last<d) return;
//         last = now;
//         cb(...args);
//     }
// }

// const debouncedCount = myDebounce(() => {
//     triggeredCount.innerHTML = ++ triggerCount;
// }, 800);

// const throttledCount = myThrottle(() => {
//     triggeredCount.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//     numPress.innerHTML = ++numCount;
//     debouncedCount();
//     throttledCount();
// });

                                                      /*  */

// const str = ` hello everyone!
// `;
// console.log(str);
// console.log(str.length);
// console.log(str.trim().length);

// function parseMultilineString(str) {
//     // Split the multiline string into an array of lines
//     const lines = str.trim().split('\n');

//     // Initialize an empty result array
//     const result = [];

//     // Initialize a set to store unique customer names
//     const uniqueCustomers = new Set();

//     // Iterate through each line
//     lines.forEach((line) => {
//       // Remove extra spaces and split the line into individual words
//       const words = line.trim().split(/\s+/);

//       // Extract information from the words array
//       const name = words.slice(0, 2).join(' ');
//       const item = words[2];
//       const place = words[3];
//       const price = Number(words[4]);
//       const quantity = Number(words[5]);

//       // Create an object for the customer
//       const customer = {
//         name,
//         item,
//         place,
//         quantity,
//         price
//       };

//       // Check if the customer name is unique
//       if (!uniqueCustomers.has(name)) {
//         // Add the customer object to the result array
//         result.push({ customer });
//         // Add the customer name to the set of unique customers
//         uniqueCustomers.add(name);
//       }
//     });

//     return result;
//   }

//   // Example usage
//   const multilineString = `Mary                Villa eggs Reliance 89 9
//   Mary Villa eggs Reliance 89 9
//   Kishan Raj fish market 1900 4`;

//   const result = parseMultilineString(multilineString);
//   console.log(result);

// const multilineString = `   Mary                Villa eggs Reliance 89 9
//   Mary Villa eggs Reliance 89 9

//   Kishan Raj fish market 1900 4`;

// const lines = multilineString.trim().split("\n");

// const result = [];

// lines.forEach((line) => {
//   if (line.trim() !== "") {
//     const words = line
//       .trim()
//       .split(" ")
//       .filter((word) => word !== "");

//     const name = words.slice(0, 2).join(" ");
//     const item = words[2];
//     const company = words[3];
//     const price = words[4];
//     const quantity = words[5];

//     const entry = {
//       name,
//       item,
//       company,
//       price,
//       quantity,
//     };

//     const existingEntry = result.find(
//       (e) =>
//         e.name === entry.name &&
//         e.item === entry.item &&
//         e.company === entry.company &&
//         e.price === entry.price &&
//         e.quantity === entry.quantity
//     );
//     if (!existingEntry) result.push(entry);
//   }
// });

// console.log(result);

// const date = new Date(567889000);
// console.log(date);
// const time = date.getTime(); // in ms
// const dateToday = new Date(time);
// console.log(dateToday); // date string

// const someDate = new Date("2022-01-01");
// const currentDate = new Date();

// const diff = currentDate-someDate;
// console.log(diff);

// const seconds = Math.floor(diff/1000);
// const minutes = Math.floor(diff/(60*1000));
// const hours = Math.floor(diff/(60*60*1000));
// const days = Math.floor(diff/(24*60*60*1000));

// console.log(seconds, minutes, hours, days);


// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// a();
// console.log(b);

// let a;
// console.log(a); // undefined
// a = 4;

// const a = 10;
// console.log(a); 
// a = 11; // type error

// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
//   console.log(a);
//   console.log(b);
//   console.log(c);

//   function hello() {
//     console.log("hello!");
//   }
// }

// console.log(a);
// hello();
//   console.log(b);
//   console.log(c);

// const a = 10;
// {
//   var a = 20;
// }


// function myDebounce(cb, d, ...args) {
//   let timer;

//   return () => {
//      const context = this; // Capture the current context
//      if(this===counter) {
//       console.log(true);
//      } else {
//       console.log(false);
//      }

//      if(timer) clearTimeout(timer);
//      timer = setTimeout(() => {
//           cb.apply(context, args); // Apply the captured context to cb
//       }, d);
//   }
// }

// // Object with a method to debounce
// const counter = {
//   value: 0,
//   increment() {
//       this.value++;
//       console.log("Incremented value:", this.value);
//   }
// };

// // Debounced version of counter.increment
// const debouncedIncrement = myDebounce.bind(counter);
// const newDebouncedCount = debouncedIncrement(counter.increment, 1000);

// // Simulating multiple rapid calls to debouncedIncrement
// console.log("Start calling debouncedIncrement");
// newDebouncedCount();
// newDebouncedCount();
// newDebouncedCount();
// // debouncedIncrement(); // Should schedule an increment after 1000ms
// // debouncedIncrement(); // Should reset timer and schedule another increment after 1000ms
// // debouncedIncrement(); // Should reset timer and schedule another increment after 1000ms

const obj = {
  count: 0,
  getData() {
    console.log("fetching data.."+ this.count++);
  }
};



function myDebounce(fn, d) {
  let timer;
  return function() {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  }
}

const betterFunc = myDebounce(obj.getData.bind(obj), 500);