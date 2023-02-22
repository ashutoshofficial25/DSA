function reArrangeNegative(array) {
  let start = 0,
    end = array.length - 1;

  while (start < end) {
    if (array[start] > 0 && array[end] < 0) {
      start++;
      end--;
    }
    if (array[start] < 0 && array[end] > 0) {
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--;
    }
    if (array[start] > 0) {
      start++;
    } else if (array[end] < 0) {
      end--;
    }
  }
  return array;
}

const answer = reArrangeNegative([-1, -1, 5, 1, 7, 1, -8, 2, -2]);
console.log(answer);
