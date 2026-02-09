class Teacher {
  constructor(name, channel, likes = 0) {
    this.name = name;
    this.channel = channel;
    this.videoLikes = likes;
  }

  intro() {
    return `Hey i am ${this.name} and my channel is ${this.channel}`;
  }

  like() {
    this.videoLikes++;
    return `Liked the video! Total likes = ${this.videoLikes}`;
  }
}

// const roadsidecoder = new Teacher("Piyush", "Roadsidecoder");
// console.log(roadsidecoder.intro());
// console.log(roadsidecoder.like());

/* Constructor Function */

// function Teacher(name, channel, likes = 0) {
//   this.name = name;
//   this.channel = channel;
//   this.videoLikes = likes;
// }

// Teacher.prototype.intro = function() {
//     return `Hey i am ${this.name} and my channel is ${this.channel}`;
// }

// Teacher.prototype.like = function() {
//     this.videoLikes++;
//     return `Liked the video! Total likes = ${this.videoLikes}`;
// }

// const roadsidecoder = new Teacher("Piyush", "Roadsidecoder");
// console.log(roadsidecoder.intro());
// console.log(roadsidecoder.like());

class YoutubeTeacher extends Teacher {
    constructor(name, channel, likes, subscribers) {
        super(name, channel, likes);
        this.subscribers = subscribers;
    }

    static paidCourse() { // properties are also not accessible inside
        // return `Front end prep course by ${this.channel}`;
        return new YoutubeTeacher("Piyush Agarwal", "Roadsidecoder", 70, '90k');
    }

    subscribersCount() { // paidCourse not accessible from here
        return `${this.channel} has ${this.subscribers} subscribers`;
    }
}

// const ytTeacher = new YoutubeTeacher("Piyush Agarwal", "Roadsidecoder", 70, '90k');
const ytTeacher = YoutubeTeacher.paidCourse();
console.log(ytTeacher.subscribersCount());
console.log(ytTeacher.intro());
console.log(ytTeacher.like());
// console.log(ytTeacher.paidCourse()); // typeError: ytTeacher.paidCourse is not a function

// const ytTeacher = YouTubeTeacher.paidCourse(); // method to access

/* a class can only have one constructor, otherwise: syntax error */

// class Shape {
//   constructor(dimension) {
//     this.dimension = dimension
//   }

//   area() {
//     console.log("Area of the shape is: ");
//   }
// }

// class Circle extends Shape {
//   constructor(dimension) {
//     super(dimension);
//   }

//   area() {
//     console.log(Math.PI * this.dimension * this.dimension);
//   }
// }

// class Square extends Shape {
//   constructor(dimension) {
//     super(dimension);
//   }

//   area() {
//     console.log(this.dimension*this.dimension);
//   }
// }

// const circle = new Circle(5);
// const square = new Square(5);

// circle.area();
// square.area();

// class Hello {
//   greet() {
//     console.log("Hello there!");
//   }
// }

// class Child extends Hello {
//   constructor() {
//     super();
//     super.greet();
//   }
// }

// const child = new Child();

                                           /* static methods and properties */
class Counter {
  // Static property
  static count = 0;

  // Static method
  static increment() {
    this.count += 1;
  }

  // Static method
  static getCount() {
    return Counter.count;
  }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // Output: 2

                                          /* getters and setters in class */

class Teacher1 {
  constructor(name, channel, likes=0) {
    this.name = name;
    this.channel = channel;
    this._videoLikes = likes; 
  }

  intro() {
    return `Hey it's ${this.name}! welcome to ${this.channel}`;
  }

  like() {
    this._videoLikes++;
    return `Liked the video! Current likes: ${this._videoLikes}`;
  }

  get videoLikes() {
    return this._videoLikes;
  }

  set videoLikes(likes) {
    if(likes<0) throw new Error("Must be greater than zero!");
    else this._videoLikes = likes;
  }

}

const teacher = new Teacher1("Piyush", "RoadsideCoder", 56);
console.log(teacher.intro());
console.log(teacher.like());
teacher.videoLikes = 2;
console.log(teacher.videoLikes); // 2

                                        /* another example */

class Rectangle {
  constructor(width, height) {
    this._width = width; // Internal property
    this._height = height; // Internal property
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Setter for width with validation
  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log('Width must be positive');
    }
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Setter for height with validation
  set height(value) {
    if (value > 0) {
      this._height = value;
    } else {
      console.log('Height must be positive');
    }
  }

  // Getter for area
  get area() {
    return this._width * this._height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.width); // Output: 10
rect.width = 15; // Sets _width through the setter
console.log(rect.width); // Output: 15
rect.width = -5; // Invalid width
// Output: Width must be positive
console.log(rect.width); // Output: 15
console.log(rect.area); // Output: 75