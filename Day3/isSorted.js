//find the array is sorted or not from the particular index
function isSorted(array, index) {
  if (array.length - 1 == index) return true;

  return array[index] <= array[index + 1] && isSorted(array, index + 1);
}

console.log(isSorted([4, 5, 7, 8, 9, 9, 12], 0));
