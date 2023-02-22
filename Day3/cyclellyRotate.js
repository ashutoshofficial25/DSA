//cyclically rotate the array
//
//[5,1,3,2,9]
//[9,5,1,3,2]

// by js inbuild method
function rotateArray(arr) {
  let last = arr[arr.length - 1];
  arr.pop();
  arr.unshift(last);
  return arr;
}
console.log(rotateArray([5, 1, 3, 2, 9]));
//by loop

//shift array by given number;
//[5,1,3,2,9]
//[9,2,5,1,3]
function cyclicallyrotateArray(array, x) {
  let arr = [];
  let count = 1;
  while (count <= x) {
    arr.push(array[array.length - count]);
    count++;
  }
  for (let i = 0; i < arr.length; i++) {
    array.pop();
    array.unshift(arr[i]);
  }
  return array;
}
console.log(cyclicallyrotateArray([1, 2, 3, 4, 5], 2));
