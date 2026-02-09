const obj = {
  name: "Ben",
};

function hello(age) {
  console.log("Hello I am " + this.name + " and i am " + age + " years old!");
}

hello(12);

hello.call(obj, 12);

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable!");
  }

  context.fn = this;
  context.fn(...args);
};

hello.myCall(obj, 12);

// hello.apply(obj, [23]);

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable!");
  }

  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  context.fn(...args);
};

hello.myApply(obj, [23]);

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable!");
  }

  context.fn = this;

  return function (...newArgs) {
    context.fn(...args, ...newArgs);
  };
};

const boundFn = hello.myBind(obj, 78);
boundFn();

var original = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};

function clone(obj) {
  if (obj === null && typeof obj !== "object") {
    return obj;
  }

  const clonedObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = clone(obj[key]);
    }
  }
}

const newObj = clone(original);

const arr = [2, 0, -1, -3, 3];

const newArr = arr.map((item, i, arr) => {
  if (item < 0) {
    return item * 2;
  }
});

console.log(newArr);



let x = 5;
let y = 10;
let z = 25;
x = y;
x = y = z;
console.log(x); // 25
console.log(y); // 25
console.log(z); // 25