function cyclicRotate(array) {
  let num = array[array.length - 1];
  array.unshift(num);
  array.pop();
  return array;
}

console.log(cyclicRotate([1, 2, 3, 4, 5]));

//2nd method

function rotate(array) {
  let temp = array[array.length - 1];

  for (let i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = temp;
  return array;
}
console.log(rotate([1, 2, 3, 4, 5]));
