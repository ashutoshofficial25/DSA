function maxProfit(arr) {
  let maxprofit = 0;
  //we can use arr-1
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      let sum = arr[i + 1] - arr[i];
      maxprofit += sum;
    }
  }
  return maxprofit;
}

let arr = [180, 160, 150, 100, 90, 20];
console.log(maxProfit(arr));
