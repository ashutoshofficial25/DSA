let age = 30,
  counter = 0,
  max = 100;
let result = age;
while (counter <= max) {
  let half = Math.floor((counter + max) / 2);
  if (half * half <= age) {
    result = half;
    counter = half + 1;
  } else {
    max = half - 1;
  }
}
console.log(result);
