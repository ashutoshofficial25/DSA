//check if there exists sub array whose sum =0
//1 find all the sub arrays => time complexity n2
//2 we will use set to solve this problem

function isZero(arr) {
  let set = new Set();

  let sum = 0;
  //
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    //if sum ==0 or sum is exist in set
    if (sum == 0 || set.has(sum)) {
      return true;
    } else {
      set.add(sum);
    }
  }
  return false;
}

let array = [-3, 2, 3, 1, 6];
let array2 = [4, 2, -3, 1, 6];

console.log(isZero(array2));
