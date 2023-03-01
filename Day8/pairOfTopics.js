function countNumberOfPairs(A, B) {
  let n = A.length;
  let d = new Array(n);

  for (let i = 0; i < n; ++i) {
    d[i] = A[i] - B[i];
  }

  d.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < d.length; ++i) {
    if (d[i] <= 0) {
      let k = findIndex(d, 0, d.length, -d[i]);
      count = count + (n - k);
    } else {
      //n-i(c) 2
      count = count + ((n - i) * (n - i - 1)) / 2;
    }
  }
}

function findIndex(array, l, r, element) {
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] > element) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}
