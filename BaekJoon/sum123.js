function dp9095(num) {
  const DP = new Array(num + 1).fill(0);
  DP[1] = 1;
  DP[2] = 2;
  DP[3] = 4;
  for (let i = 4; i <= num; i++) {
    DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
  }
  return DP[num];
}

console.log(dp9095(4));
console.log(dp9095(7));
console.log(dp9095(10));
