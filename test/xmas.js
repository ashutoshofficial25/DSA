function xmas(arr, x) {
  let k = 0;
  if (arr.length == 1) {
    return 0;
  }
  if (arr[0] > arr[1]) {
    while (!(arr[0] == x)) {
      arr[0] = arr[0] - 1;
      ++k;
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] > x) {
      ++k;
      arr[i + 1] = arr[i + 1] - 1;
    }
  }
  return k;
}
console.log(xmas([2, 5, 2], 3));
