function sort(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] == 0) {
      i++;
    }
    if (arr[i] == 1) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
}

const arr = [0, 1, 0, 1, 0, 1, 0, 0, 1, 1];

sort(arr);

console.log(arr);
