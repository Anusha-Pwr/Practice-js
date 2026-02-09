// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 resolved");
//     }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p2 resolved");
//     }, 5000);
// });

// async function handlePromise() {
//     console.log("hello world!");

//     const val1 = await p1;
//     console.log("namaste world!");
//     console.log(val1);


//     const val2 = await p2;
//     console.log(val2);
//     console.log("namaste everyone!");

// }

// handlePromise();

// console.log("is execution stopped?");
// f();
// function f() {
//     setTimeout(() => {
//         console.log("waiting...");
//     }, 5000);
// }

// setTimeout(() => {
//     console.log("waiting for 0s...");
// }, 0);


/* Hoisting Practice */

// const x = 1;

// {
//     console.log(x);
//     const x = 2;
// }

// for (var a of [1, 2, 3]);
// console.log(a);

// function foo(a) {
//     const a = 1;  // error, var can be used
//     console.log(a);
//   }

//   foo(2);

//   try {
//     throw 1;
//   } catch (e) {
//     var e = 2; // Works
//   }
//   console.log(e);

//   var x = y,
//   y = "A";
// console.log(x, y);

// var x = 0;
// function f() {
//   var x = y = 1; // Declares x locally; declares y globally.
//   console.log(x); // 1
// }

// f();

// console.log(x, y);

// if(true) let a = 1; // error

// function go(n) {
//     // n here is defined!
//     console.log(n); // { a: [1, 2, 3] }

//     for (let n of n.a) {
//       //          ^ ReferenceError
//       console.log(n);
//     }
//   }

//   go({ a: [1, 2, 3] });

                                                   /* new promise practice */

// console.log("start");

// function display(username) {
//     setTimeout(() => {
//         return 'subscribe to ${username}';
//     });
// }

// const message = display("anu coder");

// console.log(message); // undefined

// console.log("finish");

                                                   /* using callbacks */


// console.log("start");

// function display(username, cb) {
//     setTimeout(() => {
//         cb(`subscribe to ${username}`);
//     });
// }

// function likeTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`like the ${video} video`);
//     }, 2000);
// }

// function shareTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`share the ${video} video`);
//     });
// }

// const message = display("anu coder", function(message) {
//     console.log(message);
//     likeTheVideo("promises", (action) => {
//         console.log(action);
//         shareTheVideo("promises", (msg) => {
//             console.log(msg);
//         });
//     });
// });

// console.log("finish");
// setTimeout(() => {
//     console.log("1s passed!");
// }, 1000);

                                   /* using promises */

// console.log("start");

// function display(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`subscribe to ${username}`);
//         });
//     }); 
// }

// function likeTheVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`like the ${video} video`);
//         }, 2000);
//     });
// }

// function shareTheVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share the ${video} video`);
//         });
//     });  
// }

// const message = display("anu coder")
// .then((message) => {
//     console.log(message);
//     return likeTheVideo("promises");
// }).then((action) => {
//     console.log(action);
//     return shareTheVideo("promises");
// }).then((msg) => {
//     console.log(msg);
// });

// console.log("finish");
// setTimeout(() => {
//     console.log("1s passed!");
// }, 1000);

                                                     /* async, await */
// async function getResult() {
//     const val1 = await display("anu coder");
//     console.log(val1);

//     const val2 = await likeTheVideo("promises");
//     console.log(val2);

//     const val3 = await shareTheVideo("promises");
//     console.log(val3);
// }

// getResult();

// console.log("finish");
// setTimeout(() => {
//     console.log("1s passed!");
// }, 1000);

/* question 1 */

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {  // start, 1, end,  2
//     console.log(1);
//     resolve(2);
// });

// promise1.then((res) => {
//     console.log(res);
// });

// console.log("end");

/* question 2 */
// console.log("start");

// const promise1 = new Promise((resolve, reject) => { // start, 1, 3, end, 2
//     console.log(1);
//     resolve(2);
//     console.log(3);
// });

// promise1.then((res) => {
//     console.log(res);
// });

// console.log("end");

/* question 3 */
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     // resolve(2);
//     reject("rejected");
//     console.log(3);
// });

// promise1.then((res) => {
//     console.log("hello");
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// console.log("end"); // start, 1, 3, end, hello, 2 && start, 1, 3, end, rejected

/* question 4 */

// console.log("start");

// const fn = () => new Promise((resolve, reject) => {
//     console.log(1);  // start, middle, 1, end, success
//     resolve("success");
// });

// console.log("middle");

// fn().then((res) => {
//     console.log(res);
// });

// console.log("end");

/* question 5 */
// function job() {
//     return new Promise((resolve, reject) => {
//         resolve();
//     });
// }

// let promise = job();

// promise.then(function() {
//     console.log("success 1");
// }).then(function() {
//     console.log("success 2");
// }).then(function() {
//     console.log("success 3");
// }).catch(function() {
//     console.log("error 1");
// }).then(function() {
//     console.log("success 4");
// });

/* question 6 */
// function job(state) {
//     return new Promise((resolve, reject) => {
//         if(state) {
//             resolve("success");
//         } else {
//             reject("error");
//         }
//     });
// }

// let promise = job(true); // success, error, error caught

// promise.then(function(data) {
//     console.log(data);
//     return job(false);
// }).catch(function(error) {
//     console.log(error);
//     return "error caught";
// }).then(function(data) {
//     console.log(data);
//     return job(true);
// }).catch(function(error) {
//     console.log(error);
// }); 

// promise.then(function(data) {               // success, error, error
//     console.log(data);
//     return job(false);
// }).catch(function(error) {
//     console.log(error);
//     return job(false);
// }).then(function(data) {
//     console.log(data);
//     return job(true);
// }).catch(function(error) {
//     console.log(error);
// }); 


/* question 7 */
// function job(state) {
//     return new Promise((resolve, reject) => {
//         if(state) {
//             resolve("success");
//         } else {
//             reject("error");
//         }
//     });
// }

// let promise = job(true);

// promise.then(function(data) {          // success, defeat, error, error caught, success:test
//     console.log(data);
//     return job(true);
// }).then(function(data) {
//     if(data!=="victory") {
//         throw "defeat";            
//     }
//     return job(true);
// }).then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//     console.log(error);
//     return job(false);
// }).then(function(data) {
//     console.log(data);
//     return job(true);
// }).catch(function(error) {
//     console.log(error);
//     throw new Error("error caught");
// }).then(function(data) {
//     console.log(data);
//     return new Error("test"); // does not throw an error
// }).then(function(data) {
//     console.log("success:", data.message);
// }).catch(function(data) {
//     console.log("error:", data.message);
// });

/* question 8 */
// const firstPromise = new Promise((resolve, reject) => {
//     resolve("First");
// });

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise);
// });

// secondPromise.then((res) => {
//     return res;
// }).then((data) => {
//     console.log(data);
// });

/* question 9 */
// function loadJson(url) {
//     return fetch(url).then((response) => {
//         if(response.status===200) {
//             return response.json();
//         } else {
//             throw new Error(response.status);
//         }
//     });
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => console.log(err));

// async function loadJson(url) {
//     try {
//         const data = await fetch(url);
//         if(data.status===200) {
//             return data.json();
//         } else {
//             throw new Error(response.status);
//         }
//     }
//     catch(err) {
//         console.log(err);
//     }
// }
// loadJson("https://fakeurl.com/no-such-user.json");

/* question 11 */

function display(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`subscribe to ${username}`);
        }, 3000);
    }); 
}

function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`like the ${video} video`);
        }, 2000);
    });
}

function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`share the ${video} video`);
        });
    });  
}

// function recursiveProm(funcPromises) { // prints according to whenever each promise resolves
//     if(funcPromises.length===0) return;

//     const pr = funcPromises.shift();
//     pr.then((res) => console.log(res)).catch((err) => console.log(err));

//     recursiveProm(funcPromises);
// }

// async function recursiveProm(funcPromises) { // prints sequentially, in the order the promise returning functions are passed
//   if(funcPromises.length===0) return;

//   const pr = funcPromises.shift();
//   try {
//     const promiseLine = await pr;
//     console.log(promiseLine);
//   } catch(err) {
//     console.log(err);
//   }
 
//   // pr.then((res) => console.log(res)).catch((err) => console.log(err));

//   recursiveProm(funcPromises);
// }

// recursiveProm([display("anu coder"), likeTheVideo("promises"), shareTheVideo("promises")]);

/* question 12: promise polyfill */

function PromisePolyfill(executor) {

    let onResolve, onReject, value, isFulfilled=false, isCalled=false,
    isRejected = false;

    function resolve(val) {
        isFulfilled = true;
        value = val;

        if(typeof onResolve === "function") {
            isCalled = true;
            onResolve(value);
        }
    }

    function reject(val) {
        isRejected = true;
        value = val;

        if(typeof onReject === "function") {
            isCalled = true;
            onReject(value);
        }
    }

    this.then = function(callback) {
        onResolve = callback;

        if(isFulfilled && !isCalled) {
            onResolve(value);
            isCalled = true;
        }

        return this;
    }

    this.catch = function(callback) {
        onReject = callback;

        if(isRejected && !isCalled) {
            onReject(value);
        }
        return this;
    }

    executor(resolve, reject);
}

const pr = new PromisePolyfill((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000)})
.then((res) => console.log(res))
.catch((err) => console.error(err));

// PromisePolyfill.resolve = (val) => {
//     return new PromisePolyfill((resolve, reject) => {
//         resolve(val);
//     });
// }

// PromisePolyfill.reject = (val) => {
//     return new PromisePolyfill((resolve, reject) => {
//         reject(val);
//     });
// }

// const resolvedPromise = PromisePolyfill.resolve("Resolved Value");
// resolvedPromise.then(res => console.log(res));

// const rejectedPromise = PromisePolyfill.reject("Rejected Promise");
// rejectedPromise.catch(res => console.log(res));

/* question 13 */

// function display(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`subscribe to ${username}`);
//         });
//     });
// }

// function likeTheVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`like the ${video} video`);
//         }, 2000);
//     });
// }

// function shareTheVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`share the ${video} video`);
//         });
//     });
// }

// Promise.allPolyfill = (promises) => {
//     return new Promise((resolve, reject) => {
//         const results = [];

//         if(!promises.length) {
//             resolve(results);
//             return;
//         }

//         let pending = promises.length;

//         promises.forEach((promise, index) => {
//             Promise.resolve(promise).then((res) => {
//                 // console.log(res);
//                 results[index] = res;
//                 pending--;

//                 if(pending===0) {
//                     resolve(results);
//                 }
//             }).catch((err) => reject(err));
//         });

//     });
// }


// Promise.allPolyfill([display("anu coder"), likeTheVideo("promises"), shareTheVideo("promises")])
// .then((res) => console.log(res))
// .catch((err) => console.error(err));

// Promise.allSettledPolyfill = (promises) => {
//     return new Promise((resolve, reject) => {
//         let results = [];

//         if (promises.length === 0) {
//             resolve(results);
//         }

//         let pending = promises.length;

//         promises.forEach((promise, index) => {
//             Promise.resolve(promise).then((res) => {
//                 results[index] = {
//                     status: "fulfilled",
//                     value: res
//                 }
//             }).catch((err) => {
//                 results[index] = {
//                     status: "rejected",
//                     reason: err
//                 }
//             }).finally(() => {
//                 pending--;
//                 if(pending===0) {
//                     resolve(results);
//                 }
//             }); 
//         });
//     });
// }


// Promise.allSettledPolyfill([display("anu coder"), likeTheVideo("promises"), shareTheVideo("promises")])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));


// function display(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`subscribe to ${username}`);
//         });
//     });
// }

// function likeTheVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`like the ${video} video`);
//         }, 2000);
//     });
// }

// function shareTheVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share the ${video} video`);
//         }, 1000);
//     });
// }


// Promise.anyPolyfill = function(promises) {
//     return new Promise((resolve, reject) => {
//         let results = [];

//         if(!promises.length) {
//             resolve(results);
//             return;
//         }

//         let pending = promises.length;

//         promises.forEach((promise, index) => {
//             Promise.resolve(promise).then((res) => {
//                 resolve(res);
//                 console.log("hello");
//                 console.log(res);
//             }).catch((err) => {
//                 results.push(err);
//                 pending--;
//                 if(pending===0) {
//                     reject(results);
//                 }
//             });
//         });
//     });
// }


//     Promise.anyPolyfill([display("anu coder"), likeTheVideo("promises"), shareTheVideo("promises")])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

// async function hello() {
//     return new Promise((resolve, reject) => {
//         reject("oh no!");
//         resolve("done!");
//     });
// }

// hello().then((val) => console.log(val)).catch(err => console.log(err));

// function testArguments() {
//     console.log(arguments); // Output: [1, 2, 3]
  
//     // arguments is array-like, so you can access its elements by index
//     console.log(arguments[0]); // Output: 1
//     console.log(arguments[1]); // Output: 2
//     console.log(arguments[2]); // Output: 3
  
//     // But you can't use array methods directly on arguments
//     // This will throw an error
//     // arguments.forEach(console.log);

//     for(let i=0; i<arguments.length; i++) {
//         console.log(arguments[i]);
//     }
//   }
  
//   testArguments(1, 2, 3);

//   function hello(a, b) {
//     console.log(a, b);
//   }

//   hello("hey", "orange", "banana");

//   const str = "hello";
//   console.log(...str);
//   console.log({...str});