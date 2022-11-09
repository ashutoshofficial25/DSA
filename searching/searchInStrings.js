const searchString = (str, searchedLetter) => {
  for (let index = 0; index < str.length; index++) {
    if (str.charAt(index) == searchedLetter) {
      return index;
    }
  }

  return -1;
};
let str = "target is not there";
let searchedLetter = "o";

let ans = searchString(str, searchedLetter);
console.log(ans);
