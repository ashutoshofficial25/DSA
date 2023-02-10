function isAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  let map = new Map();

  //setting frequency for all char in string1
  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i])) {
      let count = map.get(a[i]);
      count++;
      map.set(a[i], count);
    } else {
      map.set(a[i], 1);
    }
  }
  console.log(map);

  for (let i = 0; i < b.length; i++) {
    if (map.has(b[i])) {
      let count = map.get(b[i]);
      count--;
      map.set(b[i], count);
    } else {
      return false;
    }
  }
  let keys = map.keys();

  console.log(keys);

  for (let key of keys) {
    map.get(key);

    if (map.get(key) != 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("tgzonrrftzq", "tqzzrtnrftg"));
