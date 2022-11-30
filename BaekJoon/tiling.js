let num = 0;
const DP = new Array(num + 1).fill(0);

DP[1] = 1;
DP[2] = 2;
DP[3] = 3;

for (let i = 0; i < num; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2]) % 10007;
}
