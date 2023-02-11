function uncommon(a, b) {
  let mapa = new Map();
  let mapb = new Map();
  let result = new Set();

  for (let i = 0; i < a.length; i++) {
    mapa.set(a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    mapb.set(b[i]);
  }
  for (let i = 0; i < a.length; i++) {
    if (mapb.has(a[i])) {
      continue;
    } else {
      result.add(a[i]);
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (mapa.has(b[i])) {
      continue;
    } else {
      result.add(b[i]);
    }
  }
  let str = "";
  for (let key of result) {
    str += key;
  }

  return str.length ? str.split("").sort().join("") : -1;
}

console.log(uncommon("geeks", "geeks"));
