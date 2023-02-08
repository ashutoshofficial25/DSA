//Findout maximum and minimum value in array
function MinMax(min, max) {
  this.min = min;
  this.max = max;
}

//function to find min and max in array
function findMinMax(array) {
  let minMaxObj = new MinMax(array[0], array[0]);
  //logic to find min and max
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minMaxObj.min) {
      minMaxObj.min = array[i];
    }
    if (array[i] > minMaxObj.max) {
      minMaxObj.max = array[i];
    }
  }

  return minMaxObj;
}

let array = [5, 7, -2, 9, 11, 4];
let ans = findMinMax(array);
console.log(ans);
