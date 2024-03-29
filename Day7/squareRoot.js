function sqaureRoot(number, precision) {
  let start = 0;
  let end = number;
  let mid;
  let ans = 0.0;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);

    if (mid * mid === number) {
      ans = mid;
      break;
    }
    if (mid * mid < number) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }

  let increment = 0.1;
  for (let i = 0; i < precision; i++) {
    while (ans * ans <= number) {
      ans = (parseFloat(ans) + parseFloat(increment)).toFixed(precision);
    }
    ans = parseFloat(ans) - parseFloat(increment);
    increment = increment / 10;
  }
  return ans;
}

console.log(sqaureRoot(10, 3));
