function tiling(n) {
  if (n < 2) {
    return n;
  }
  return tiling(n - 1) + tiling(n - 2);
}
