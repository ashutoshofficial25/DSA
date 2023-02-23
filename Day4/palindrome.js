function isPalindrome(str, start, end) {
  if (start >= end) {
    return true;
  }

  if (str[start] !== str[end]) {
    return false;
  }

  if (start - 1 < end) {
    return CheckPalindrome(str, start + 1, end - 1);
  }
}
console.log(isPalindrome("madam", 0, 4));

function CheckPalindrome(str, start, end) {
  if (start >= end) {
    return true;
  }

  if (str[start] !== str[end]) {
    return false;
  }

  if (start - 1 < end) {
    return CheckPalindrome(str, start + 1, end - 1);
  }
}

const ans = CheckPalindrome("madd2am", 0, 6);
console.log("is palindrome", ans);
