function isSubset(arr1, arr2, n, m) {
  let set = new Set();
  if (m > n) {
    return "No";
  }
  for (let i = 0; i < m; i++) {
    set.add(arr2[i]);
  }
  for (let i = 0; i < n; i++) {
    if (set.has(arr1[i])) {
      set.delete(arr1[i]);
    }
  }
  if (set.size > 0) {
    return "No";
  } else {
    return "Yes";
  }
}

const result = isSubset([10, 5, 2, 23, 19], [19, 5, 3], 5, 3);
console.log(result);
