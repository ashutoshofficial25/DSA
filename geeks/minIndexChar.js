function minIndexChar(str, patt) {
  let set = new Set();

  for (let i = 0; i < patt.length; i++) {
    set.add(patt[i]);
  }

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      return i;
    }
  }

  return -1;
}

console.log(minIndexChar("adcffaet", "onkl"));
