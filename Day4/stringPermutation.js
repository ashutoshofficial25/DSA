function stringPermutation(string, permutation) {
  if (string.length == 0) {
    results.push(permutation.join(""));
  } else {
    for (let i = 0; i < string.length; i++) {
      let subString = string.slice(0, i) + string.slice(i + 1);
      let arrayPermutation = permutation.slice();
      arrayPermutation.push(string[i]);
      stringPermutation(subString, arrayPermutation);
    }
  }
}

let string = "abc";
let results = [];
stringPermutation(string, []);
console.log(results);
