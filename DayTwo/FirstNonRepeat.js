//First non repeting character in the string
function getFirstNonRepeting(string) {
  let map = new Map();

  for (let i = 0; i < string.length; i++) {
    if (map.has(string[i])) {
      let count = map.get(string[i]);
      count++;
      map.set(string[i], count);
    } else {
      map.set(string[i], 1);
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (map.has(string[i]) && map.get(string[i]) == 1) {
      return string[i];
    }
  }
}

console.log(getFirstNonRepeting("character"));
