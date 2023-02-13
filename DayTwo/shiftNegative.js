function shiftNegative(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if (array[end] < 0) {
      end--;
    } else if (array[start] > 0) {
      start++;
    } else if (array[start] < 0) {
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;

      start++;
      end--;
    }
  }
  return array;
}

console.log(shiftNegative([-5, 4, -7, -8, 8, -7, 2, 5, 6, -2]));
