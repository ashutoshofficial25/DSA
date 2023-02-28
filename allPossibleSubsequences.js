function allSubsequences(arr) {
  let result = [[]];

  for (let i = 0; i < arr.length; i++) {
    let len = result.length;
    for (let j = 0; j < len; j++) {
      result.push([...result[j], arr[i]]);
    }
  }

  return result;
}
const result = allSubsequences([1, 2, 3]);

console.log(result);
