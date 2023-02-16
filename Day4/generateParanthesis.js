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

let n = 2;
let paranthesisStr = new Array(2 * n);
printParanthesis(paranthesisStr, 0, 0, 0, 2);
