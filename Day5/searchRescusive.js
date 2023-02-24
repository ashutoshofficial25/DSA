function binarySearch(array, number, start, end) {
  if (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (array[mid] == number) {
      return mid;
    }
    if (array[mid] > number) {
      return binarySearch(array, number, start, mid - 1);
    } else {
      return binarySearch(array, number, mid + 1, end);
    }
  }

  return -1;
}

let arr = [1, 3, 7, 9, 13, 22, 35, 42, 55];
console.log(binarySearch(arr, 232, 0, arr.length - 1));
