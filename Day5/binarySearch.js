//Iterative approach for binary search

//choosing the mid element
//why r+l/2 no-> if we have r = INTEGER_MAX , then we cannot add anything to it;
//mid =  l + Math.floor((r-l)/2)
function binarySearch(array, x) {
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
// let find = binarySearch([-5, -1, 2, 3, 7, 8, 10, 27], -5);
// console.log(find);

function binarySearching(array, num) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (array[mid] == num) {
      return mid;
    }
    if (array[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearching([-1, 2, 3, 4, 5, 8, 47, 48], -1));
