function lastOccurence(arr, num, start, end) {
  if (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] == num && (arr[mid + 1] > num || mid == arr.length - 1)) {
      return mid;
    } else if (arr[mid] > num) {
      return lastOccurence(arr, num, start, mid - 1);
    } else {
      return lastOccurence(arr, num, mid + 1, end);
    }
  }
  return -1;
}
let array = [2, 5, 6, 6, 9, 9, 9, 9, 9, 10, 12, 13];

console.log(lastOccurence(array, 9, 0, array.length - 1));
