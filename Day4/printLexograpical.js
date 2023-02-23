function lexicographical(n) {
  for (let i = 1; i < n; i++) {
    lexicographicalRecursion(i, n);
  }
}

function lexicographicalRecursion(i, n) {
  if (i > n) {
    return;
  }

  console.log(i);
  for (let j = 0; j < n; j++) {
    lexicographicalRecursion(10 * i + j, n);
  }
}
lexicographical(25);
