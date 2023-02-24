//find first and last occurance if the element in array
function firstOccurrance(arr, num, start, end) {
  if (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] == num && (arr[mid - 1] < num || mid == 0)) {
      return mid;
    } else if (arr[mid] < num) {
      return firstOccurrance(arr, num, mid + 1, end);
    } else {
      return firstOccurrance(arr, num, start, mid - 1);
    }
  }
  return -1;
}

let array = [2, 5, 6, 6, 9, 9, 9, 9, 9, 10, 12, 13];

console.log(firstOccurrance(array, 9, 0, array.length - 1));
