//Destructuring of objects and arrays

// 1. Destructuring of arrays

let names = ["Ashutosh", "Raj", "Shanghai"];

// rest/spread operator
let [name1, ...name2] = names;

// console.log(name1, name2);

//Destructuring of objects

const person = {
  name: "Ashutosh",
  age: 30,
  city: "Lucknow",
  job: "Software Developer",
};

const { name, ...rest } = person;

console.log(rest);
