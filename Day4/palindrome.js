function isPalindrome(args, start, end) {
  if (start >= end) {
    return true;
  }

  if (args[start] != args[end]) {
    return false;
  }

  if (start - 1 < end) {
    return isPalindrome(args, start++, end--);
  }

  return true;
}

console.log(isPalindrome("madam", 0, 4));
