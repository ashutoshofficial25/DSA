function binarySearch(arr, x, l, r) {
  if (r >= 1) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid] == x) {
      return mid;
    }
    if (arr[mid] > x) {
      return binarySearch(arr, x, l, mid - 1);
    } else {
      return binarySearch(arr, x, mid + 1, r);
    }
  }
  return -1;
}

let find = binarySearch([-5, -1, 2, 3, 5, 7, 8, 10, 24, 54], 7, 0, 8);
console.log(find);
