//generate balanced paranthesis
//TODO:
function printParanthesis(paranthesisString, index, open, close, n) {
  if (close == n) {
    console.log(paranthesisString);
    return;
  } else {
    if (open < n) {
      paranthesisString[index] = "(";
      printParanthesis(paranthesisString, index + 1, open + 1, close, n);
    }
    if (open > close) {
      paranthesisString = ")";
      printParanthesis(paranthesisString, index + 1, open, close + 1, n);
    }
  }
}

// let n = 2;
// let paranthesisStr = new Array(2 * n);
// printParanthesis(paranthesisStr, 0, 0, 0, 2);

function generateParanthesis(pArray, index, open, close, n) {
  if (close == n) {
    let s = "";
    for (let i = 0; i < pArray.length; i++) {
      s += pArray[i];
    }
    if (s !== "") {
      console.log(s);
    }
    return;
  } else if (open < n) {
    pArray[index] = "(";
    generateParanthesis(pArray, index + 1, open + 1, close, n);
  }
  if (open > close) {
    pArray[index] = ")";
    generateParanthesis(pArray, index + 1, open, close + 1, n);
  }
}
let n = 3;
let pString = new Array(2 * n);
generateParanthesis(pString, 0, 0, 0, n);
