//Different ways to create objects in JS
/*
1. Using Object literals
2. By creating instance of object directly
3. by using the constructor function
*/
// 1. Using Object literals-{}: )(key,value) pairs and functions

const person = {
  name: "Ashutosh",
  age: 30,
  hobbies: ["software development", "philosophy"],
  greet: function () {
    console.log("Hello there");
  },
};
// accessing objects
person.name;

// 2. By creating instance of object directly
const book = new Object({
  name: "The Seeker",
  author: "Karan Bajaj",
});
console.log(book.name);

// 3. by using the constructor function
function River() {
  this.name = "Ganga";
  this.state = "Uttar Pradesh";
  this.printName = function () {
    console.log("Welcome to the river!", this.name);
  };
}
const river1 = new River();

console.log(river1.name);

class Phone {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const phone1 = new Phone("Samsung", 14000);
const phone2 = new Phone("Apple", 40000);
