function printSumTrangle(array, n) {
  if (n <= 1) {
    return array;
  }

  let newArray = new Array(n - 1);

  for (let i = 0; i < n - 1; i++) {
    newArray[i] = array[i] + array[i + 1];
  }

  printSumTrangle(newArray, n - 1);
  console.log(newArray);
}

//invoke
printSumTrangle([1, 2, 3], 3);
