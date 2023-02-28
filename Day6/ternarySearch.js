// in unimoduler we use ternary search
function ternarySearch(arr, x) {
  let l = 0;
  let r = arr.length - 1;

  while (r >= l) {
    let mid1 = l + Math.floor((r - l) / 3);
    let mid2 = r - Math.floor((r - l) / 3);

    if (arr[mid1] == x) {
      return mid1;
    }
    if (arr[mid2] == x) {
      return mid2;
    }
    if (x < arr[mid1]) {
      r = mid1 - 1;
    } else if (x > arr[mid2]) {
      l = mid2 + 1;
    } else {
      l = mid1 + 1;
      r = mid2 - 1;
    }
  }
  return -1;
}
let ans = ternarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6);
console.log(ans);
