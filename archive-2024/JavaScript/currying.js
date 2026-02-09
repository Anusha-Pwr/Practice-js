// function f(a) {
//     return function (b) {
//         console.log(a,b);
//     }
// }

// f(6)(7);

/* Question 1 */

// function sum(val) {
//     return function (a) {
//         return function (b) {
//             console.log(val+a+b);
//         }
//     }
// }

// sum(2)(6)(1);

/* Question 2 */

// function evaluate(operation) {
//     return function (a) {
//         return function (b) {
//             switch(operation) {
//                 case "sum":
//                     console.log(a+b);
//                     break;

//                 case "multiply":
//                     console.log(a*b);
//                     break;

//                 case "divide":
//                     console.log(a/b);
//                     break;

//                 case "subtract":
//                     console.log(a-b);
//                     break;

//                 default:
//                     console.log("no match");
//             }
//         }
//     }
// }

// evaluate("sum")(4)(2);
// evaluate("multiply")(4)(2);
// evaluate("divide")(4)(2);
// evaluate("subtract")(4)(2);

/* Question 3 => infinite currying */

// function sum(a) {
//     return function (b) {
//         if(b) {
//             return sum(a+b);
//         } else {
//             return a;
//         }
//     }
// }

// console.log(sum(2)(5)(1)(9)(10)()); 

/* Question 4 => Real usecase for currying */
// Manipulating the DOM
// function updateDOM(id) {
//     return function(content) {
//         document.querySelector("#"+id).textContent = content;
//     }
// }

// const updateHeading = updateDOM("heading");
// updateHeading("Hello there! I am no one");

/* Question 5 */
// function curry(func) {
//     return function curriedFun(...args) {
        
//         console.log(args.length +" "+ func.length);
//         if(args.length >= func.length) {
//             return func(...args);
//         } else {
//             return function(...next) {
//                 return curriedFun(...args, ...next);
//             }
//         }
//     }
// }

// const sum = (a,b,c,d) => a+b+c+d;
// const totalSum = curry(sum);
// console.log(totalSum(1)(2)(3)(4));

// function sum(a) {
//     return function (b) {
//         if(b) {
//             return sum(a+b);
//         } else {
//             return a;
//         }
//     }
// }

// console.log(sum(2)(2)());

// function display(a,b,c) {
//     console.log(a+b+c);
// }

function display() {
    console.log("hi");
}

const args = [1, 2, 3];
display(...args);
console.log(display.length);

/* curry function */

function sum(a,b,c) {
    return a+b+c;
}

function curry(func) {
    return function curriedFunc(...args) {
        if(args.length>=func.length) {
            return func(...args);
        } else {
            return function(...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const newFunc = curry(sum);
console.log(newFunc(2)(-1)(3));




