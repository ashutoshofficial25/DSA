function sqrt(number) {
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
    if (mid * mid > number) {
      end = mid - 1;
      ans = mid;
    } else {
      start = mid + 1;
    }
  }
}
function sqaureRoot(number) {
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
  return ans;
}
let answer = sqaureRoot(5);
console.log(answer);
