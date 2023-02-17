//Iterative approach for binary search

function binarySearcha(array, x) {
  let l = 0;
  let r = array.length - 1;
  let mid;
  while (r >= 1) {
    mid = l + Math.floor((r - l) / 2);
    if (array[mid] == x) {
      return mid;
    }
    if (array[mid] > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

//invoke
let find = binarySearcha([-5, -1, 2, 3, 7, 8, 10, 27], -5);
console.log(find);
