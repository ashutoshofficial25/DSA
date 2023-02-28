// Question: Find the number of rotations in Rotated Sorted array

//solution: The smallest number is first index of sotred array;
// so whose left number is greater than itself then that is the first number, and
// that much times array was rotated.
function rotations(array, l, r) {
  if (r < r) {
    return 0;
  }
  if (l == r) {
    return 1;
  }

  let mid = l + Math.floor((r - l) / 2);

  if (mid > l && array[mid] < array[mid - 1]) {
    return mid;
  }
  if (mid < r && array[mid] > array[mid + 1]) {
    return mid + 1;
  }
  if (array[mid] < array[r]) {
    return rotations(array, l, mid - 1);
  } else {
    return rotations(array, mid + 1, r);
  }
}

let arr = [11, 13, 15, 19, 1, 2, 3, 4, 7, 8];

const ans = rotations(arr, 0, arr.length - 1);
console.log(ans);
