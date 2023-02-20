let inc = 0.1;
for (let i = 0; i < precision; i++) {
  while (number >= ans * ans) {
    ans += inc;
  }
  ans = ans - inc;
  inc = inc / 10;
}
return ans;
