function longestCommonPrefix(arr, n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = i; j < arr[i].length - 1; j++) {
      if (arr[i][j] === arr[i][j + 1]) {
        str += arr[i][j];
      }
    }
    if (!str.length) {
      return -1;
    }
  }
  return str;
}
let res = longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"], 4);
console.log(res);
