//find the subarray with sum x
//1. we can do it with map
//2. we will do it with two pinters
function sumSubArray(array, n) {
  let start = 0;
  let currentSum = 0;

  for (let i = 0; i < array.length; i++) {
    currentSum = currentSum + array[i];
    while (currentSum > n && start <= i) {
      currentSum = currentSum - array[start];
      start++;
    }
    if (currentSum == n) {
      return [start, i];
    }
  }

  return [-1, -1];
}
let array = [1, 4, 20, 3, 10, 5];
console.log(sumSubArray(array, 33));
