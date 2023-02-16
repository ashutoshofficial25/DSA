function repetedFitstChar(string) {
  let set = new Set();

  for (let i = 0; i < string.length; i++) {
    if (set.has(string[i])) {
      return string[i];
    } else {
      set.add(string[i]);
    }
  }
  return -1;
}
console.log(repetedFitstChar("abcb"));
