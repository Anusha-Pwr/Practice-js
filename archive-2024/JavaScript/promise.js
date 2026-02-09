// const GITHUB_API = "https://api.github.com/users/akshaymarch7";
// const user = fetch(GITHUB_API);
// console.log(user);

// const cart = ["shoes", "pants", "coat"];

// const promise = createOrder(cart);

// promise.then(function(orderId) {
//     console.log(orderId);
//     return orderId;
//     //proceedToPayment(orderId);
// })
// .then(function(orderId) {
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo) {
//     console.log(paymentInfo);
// })
// .catch(function(err) {
//     console.log(err);
// });

// // Producer code

// function createOrder(cart) {

//     const pr = new Promise(function(resolve, reject) {
//         if(!validateCart(cart)) {
//             const err = new Error("cart is not valid!");
//             reject(err);
//         }

//         const orderId = "12345";
//         if(orderId) {
//             setTimeout(() => {
//                 resolve(orderId);
//             }, 5000);
//         }
//     });

//     return pr;
// }

// function validateCart(cart) {
//     return true;
// }

// function proceedToPayment(orderId) {
//     return new Promise(function(resolve, reject) {
//         resolve("Payment was successful!");
//     });
// }

// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart);

// promise.then(function(orderId) {
//     console.log(orderId);
//     return orderId;
// }).then(function(orderId) {
//     return proceedToPayment(orderId);
// }).then(function(paymentInfo) {
//     console.log(paymentInfo);
//     return showOrderSummary(paymentInfo);
// }).then(function(summary) {
//     console.log(summary);
//     return updateWallet(summary);
// }).then(function(walletStatement) {
//     console.log(walletStatement);
// })
// .catch(function(err) {
//     console.log(err);
// });

// function createOrder(cart) {
//     const pr = new Promise(function(resolve, reject) {
//         if(!validateCart(cart)) {
//             const err = new Error("Cart is invaild!");
//             reject(err);
//         }

//         const orderId = "12345";
//         if(orderId) {
//             resolve(orderId);
//         }
//     });

//     return pr;
// }

// function proceedToPayment(orderId) {
//     return new Promise(function(resolve, reject) {
//         resolve("Payment successful.");
//     });
// }

// function showOrderSummary(paymentInfo) {
//     return new Promise(function(resolve, reject) {
//         resolve({
//             shoes: 2,
//             pants: 3,
//             price: 1000,
//             result: paymentInfo
//         });
//     });
// }

// function updateWallet(summary) {
//     return new Promise(function(resolve, reject) {
//         resolve(`Balance left: ${3000-summary.price}`);
//     });
// }

// function validateCart(cart) {
//     return true;
// }

// console.log(undefined+1); // NaN

// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("Promise resolved value");
//     }, 5000); 
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("Promise resolved value 2");
//     }, 10000);
// });

// function getData() {
//     console.log("hello");
//     // JS engine does not wait for the promise to be resolved
//     p.then(res => console.log(res));
//     console.log("namaste");
// }

// getData();

/* same promise */
// async function handlePromise() {
//     console.log("hello world!");
//     // JS engine waits for the promise to be resolved before proceeding to the next lines
//     const val = await p;
//     console.log(val);
//     console.log("namaste");

//     const val1 = await p;
//     console.log(val1);
//     console.log("namaste");
// }

// handlePromise();

// async function handlePromise() {
//     console.log("hello world.");

//     const val1 = await p;
//     console.log(val1);
//     console.log("namaste js");

//     const val2 = await p2;
//     console.log(val2);
//     console.log("namaste again");
// }

// handlePromise();
// console.log("interrupted namaste!!");
// setTimeout(() => {
//     console.log("waited for 11s");
// }, 11000);


// PROMISE APIs

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("p1 fail");
//     }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("p2 fail");
//     }, 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("p3 fail");
//     }, 1000);
// });

// Promise.any([p1,p2,p3]).then((res) => console.log(res)).catch((err) => {console.log(err);
//      console.log(err.errors);});
// Promise.any([p1, p2, p3]).then((res) => console.log(res)).catch((err) => console.log(err));

// let a = 2;
// const p = new Promise((resolve, reject) => {
//     resolve(a + " is the value of a");
// });

// async function getData() {
//     return await p;
// }

// function printName() {
//     setTimeout(() => {
//         console.log("waited");
//     }, 2000);
// }

// const dataPromise = getData();
// console.log("hola!");
// printName();
// dataPromise.then((res) => console.log(res));

// async function handlePromises() {
//     try {
//         const promise = await Promise.any([p1, p2, p3]);
//         console.log(promise);
//     }
//     catch(err) {
//         console.error(err);
//         console.log(err.errors);
//     }
// }

// handlePromises();

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise is resolved!");
//     }, 5000);
// });

// const p = new Promise((resolve, reject) => {
//     resolve("hello world!");
// });

// function handle() {
//     p.then((res) => console.log(res));
//     console.log("is it resolved?");
// }
// handle();

// async function handle() {
//     const val = await p;
//     console.log(val);
//     console.log("is it resolved?");
// }
// handle();

// function handle() {
//     console.log("hello world.");
    
//     p.then((res) => console.log(res));
//     console.log("namaste js");

//     p2.then((res) => console.log(res));
//     console.log("namaste js again");
// }

// handle();

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello");
//     }, 2000);
//     // resolve("hello");
// });

// async function getData() {
//     console.log("inside function 2");
//     const data = await pr;
//     return data;
// }

// async function print() {
//     console.log("inside function 1");
//     const res = await getData();
//     console.log(res);
// }

// print();

// console.log("first");
// setTimeout(() => {
//     console.log("waited for 2s");
// }, 2000);

// const pr = new Promise((resolve, reject) => {
//     resolve("hello");
// });

// function getData() {
//     pr.then((res) => {
//         console.log(res);
//     });
//     console.log("london");
// }

// getData();
// console.log("hiiii");


// first 
// london
// hiiii
// hello
// waited for 3s

// const p = new Promise((resolve, reject) => {
//     resolve("resolved value!");
// });

// function getData() {
//     p.then((res) => {
//         console.log(res);
//     });
//     console.log("inside the function!");
// }

// getData();