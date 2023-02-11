function isValid(s) {
  let array = s.split(".");

  if (array.length > 4 || array.length < 4) {
    return 0;
  }

  console.log(array);

  let zeros = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3 || array[i].length <= 0) {
      return 0;
    }
    if (parseInt(array[i]) > 255) {
      return 0;
    }
    if (array[i] == 0 && array[i].length > 1) {
      zeros++;
    }
  }
  if (zeros == 4) {
    return 0;
  }

  return 1;
}
console.log(isValid("00..."));
