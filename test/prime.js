let prime = (n, i) => {
  if (n == i) {
    return true;
  } else {
    if (n % i == 0) {
      return false;
    } else {
      return prime(n, ++i);
    }
  }
};
for (let i = 2; i < 10000; ++i) {
  prime(i, 2);
}
console.log(`prime`);
