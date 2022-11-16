const DP = new Array(num + 1).fill(0);
DP[1] = 1;
DP[2] = 1;
DP[3] = 1;

for (let i = 0; i <= num; i++) {
  DP[i] = DP[i - 2] + DP[i - 3];
}
