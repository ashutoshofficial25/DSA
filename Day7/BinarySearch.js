function countNumnberOfPairs(A, B) {
  let n = A.length;

  let D = new Array(n);

  for (let i = 0; i < n; i++) {
    D[i] = A[i] - B[i];
  }
  D.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (D[i] <= 0) {
      let k = findIndex(D, 0, D.length, -D[i]);
      count += k;
    } else {
      //n-i(C) 2 => n-i(C)/n-r! * r!
      count = count + ((n - i) * (n - i - 1)) / 2;
      break;
    }
  }
  return count;
}

function findIndex(arr, l, r, element) {
  //h = r index
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] > element) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  //we are returning the left index
  return l;
}

let arr1 = [4, -5, 6, 3, 5, 6];
let arr2 = [5, 6, 7, 2, -9, 4];
console.log(countNumnberOfPairs(arr1, arr2));
