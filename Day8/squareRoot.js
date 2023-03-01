//square root of a given number using binary search;
function squareRoot(number, precision) {
  let start = 0;
  let end = number;
  let mid;

  let ans = 0.0;

  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);

    if (mid * mid == number) {
      ans = mid;
      break;
    }
    if (mid * mid < number) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  //for the fractional part
  let increment = 0.1;
  for (let i = 0; i < precision; i++) {
    while (ans * ans <= number) {
      ans = (parseFloat(ans) + parseFloat(increment)).toFixed(precision);
    }
    ans = (parseFloat(ans) - parseFloat(increment)).toFixed(precision);
    increment = increment / 10;
  }
  return ans;
}

const root = squareRoot(5, 2);
console.log(root);
