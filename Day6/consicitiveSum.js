function consicitiveSum(array, sum, l, r) {
  if (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (
      array[mid] + array[mid + 1] == sum ||
      array[mid] + array[mid - 1] == sum
    ) {
      return true;
    } else if (
      array[mid] + array[mid - 1] > sum ||
      array[mid] + array[mid + 1] == sum
    ) {
      return consicitiveSum(array, sum, l, mid - 1);
    } else {
      return consicitiveSum(array, sum, mid + 1, r);
    }
  }
  return false;
}

const result = consicitiveSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19, 0, 9);
console.log(result);
