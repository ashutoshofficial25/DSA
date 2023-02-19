for (let i = 0; i < 3; i++) {
  return middleone(arr[i][0], arr[i][1], arr[i][2]);
}

function middleone(a, b, c) {
  if ((a > b && a < c) || (a < b && a > c)) {
    return a;
  } else if ((b > a && b < c) || (b < a && b > c)) {
    return b;
  } else {
    return c;
  }
}

const ans = middleone(103, 312, 10);
console.log(ans);
