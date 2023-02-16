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
subsequences([1, 2, 3], 0, []);
