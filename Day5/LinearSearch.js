//
function search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }

  return -1;
}

//linear search
//if array is unshorted we have to implement linear search

function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}
