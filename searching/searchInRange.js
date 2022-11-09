//Search an in a particular range.

//search 8 in range of 2-7
let arr = [4, 5, 0, 7, 8, 6, 1, -9, -5];

const searchInRange = (start, end, array, searchedItem) => {
  for (let index = start; index < end; index++) {
    if (array[index] == searchedItem) {
      return index;
    }
  }
  return -1;
};

let found = searchInRange(2, 7, arr, 8);
console.log(found);
