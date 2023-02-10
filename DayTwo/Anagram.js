//Check if two strings are anagram .?
//anagram
//anagrams means if two or more strings are made up of same characters
//they should have same length

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  // map of frequency of characters
  let map = new Map();
  for (let i = 0; i < string1.length; i++) {
    if (map.has(string1[i])) {
      let count = map.get(string1[i]);
      count++;
      map.set(string1[i], count);
    } else {
      map.set(string1[i], 1);
    }
  }

  // loop over string2 and check
  // check for characters acailable in the 2nd str , if available then make reduce count;
  // if anagram then map values will decrease to 0
  for (let i = 0; i < string2.length; i++) {
    if (map.has(string2[i])) {
      let count = map.get(string2[i]);
      count--;
      map.set(string2[i], count);
    } else {
      return false;
    }
  }

  let keys = map.keys();

  for (let key of keys) {
    if (map.get(key) != 0) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("tgzonrrftzq", "tqzzrtnrftg"));
