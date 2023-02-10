function isPalindrome(S) {
  if (S.length < 3) {
    return true;
  }
  let start = 0;
  let end = S.length - 1;

  while (start < end) {
    console.log(start);
    console.log(end);

    if (S[start].toLowerCase() == S[end].toLowerCase()) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
}
console.log(isPalindrome("abc"));
