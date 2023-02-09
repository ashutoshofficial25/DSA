function checkRverse(arr) {
  let n = arr.length;

  if (n == 1) {
    true;
  }

  // find increasing part
  for (i = n; i < n && arr[i - 1] < arr[i]; i++) {
    console.log(i);
  }
}

let arr = [1, 3, 4, 10, 9, 8, 12, 15, 16];
let arr2 = [1, 3, 4, 10, 9, 8, 9, 12, 16];
console.log(checkRverse(arr));
