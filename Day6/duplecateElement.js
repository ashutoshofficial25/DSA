function duplicateElement(array, x) {
  let l = 0;
  let r = array.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (array[mid] == x && (array[mid - 1] == x || array[mid + 1] == x)) {
      return true;
    } else if (array[mid] > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return false;
}

function duplicateRec(array, l, r, x) {
  if (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (array[mid] == x && (array[mid - 1] == x || array[mid + 1] == x)) {
      return true;
    } else if (array[mid] < x) {
      return duplicateRec(array, mid + 1, r, x);
    } else {
      return duplicateRec(array, l, mid - 1, x);
    }
  }
  return false;
}
let answer = duplicateRec([1, 2, 3, 4, 5, 5, 6, 7, 8], 0, 8, 3);
console.log(answer);
