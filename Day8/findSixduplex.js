function findSixDuplex(array) {
  let n = array.length;
  let RHS = new Array(n * n * n + 1);
  let index = 0;
  for (let i = 0; i < n; ++i) {
    if (array[i] != 0) {
      for (let j = 0; j < n; ++j) {
        for (let k = 0; k < n; ++k) {
          RHS[index++] = array[i] * (array[j] + array[k]);
        }
      }
    }
  }
  let RHSLen = RHS.length;

  RHS.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      for (let k = 0; k < n; ++k) {
        let val = array[i] * (array[j] + array[k]);
        count = count + (lastOccurence(RHS, val) - firstOccurence(RHS, val));
      }
    }
  }

  return count;
}

function lastOccurence(RHS, val) {}
function firstOccurence(RHS, l) {}
