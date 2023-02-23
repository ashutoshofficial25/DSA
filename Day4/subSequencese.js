function subsequences(arr, index, subseq) {
  if (index == arr.length) {
    if (subseq.length > 0) {
      console.log(subseq);
    }
  } else {
    //without including the element

    subsequences(arr, index + 1, subseq);

    //include the element
    subseq.push(arr[index]);
    subsequences(arr, index + 1, subseq);

    subseq.pop();
  }
}
// subsequences([1, 2, 3], 0, []);

//Qustion based on choice , choose the element or leave the element
function printSubSequences(arr, index, subsequence) {
  if (arr.length === index) {
    if (arr.length) {
      console.log(subsequence);
    }
  } else {
    //don't choose the element
    printSubSequences(arr, index + 1, subsequence);

    //Include the element
    subsequence.push(arr[index]);
    printSubSequences(arr, index + 1, subsequence);
    subsequence.pop();
  }
  return;
}

printSubSequences([1, 2, 3], 0, []);
