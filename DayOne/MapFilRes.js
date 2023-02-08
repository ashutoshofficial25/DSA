//Map Filter reduce: Higher-order: which can take functions as arguments

let arr = [2, 4, 6, 8, 11, 12, 13, 16];

//Map
let newArr = arr.map((item) => item * 2);
console.log(newArr);

//Filter
let filterEven = arr.filter((item) => item % 2 == 0);
let filterOdd = arr.filter((item) => item % 2 != 0);

console.log(filterEven);
console.log(filterOdd);

//Reduce: take one array and reduce in single value

// arr.reduce((prev, acu, next) => prev + next);
const sum = arr.reduce((el, prev) => el + prev);
console.log(sum);
