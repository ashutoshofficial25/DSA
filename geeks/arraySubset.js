function isSubset(arr1, arr2, n, m) {
  //use here map and count occurance
  let map = new Map();
  if (m > n) {
    return "No";
  }
  for (let i = 0; i < m; i++) {
    if (map.has(arr2[i])) {
      let count = map.get(arr2[i]);
      count++;
      map.set(arr2[i], count);
    } else {
      map.set(arr2[i], 1);
    }
  }
  console.log(map);

  for (let i = 0; i < n; i++) {
    if (map.has(arr1[i])) {
      let count = map.get(arr1[i]);
      count--;
      map.set(arr1[i], count);
    }
  }

  for (let key of map.keys()) {
    console.log(map.get(key) === 0);

    if (map.get(key) > 0) {
      return "No";
    }
  }
  return "Yes";
}

// function isSubset(arr1, arr2, n, m) {
//   for (let i = 0; i < m; i++) {
//     if (!isAvailable(arr1, arr2[i])) {
//       return "No";
//     }
//   }
//   return "Yes";
// }

// function isAvailable(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == n) {
//       return true;
//     }
//   }
//   return false;
// }

const result = isSubset([1, 2, 3, 4, 5, 1, 1, 1], [1, 2, 3, 1], 8, 4);
console.log(result);
