//Linear search
//Saarching items one by one through entire array.
//Time Complexicity : Best case time complexicity o(1)
//                  : Worst case time complexicity o(n)

const search = (arr, searchedItem) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == searchedItem) {
      return index;
    }
  }

  return -1;
};
let arr = [5, 4, 2, 78, 9, 3, 1, 96];
let searchedItem = 78;

let ans = search(arr, searchedItem);
console.log(ans);
