const DP = new Array(num + 1).fill(0);
const stairs = new Array(num);

DP[0] = stairs[0];
DP[1] = Math.max(stairs[0] + stairs[1], stairs[1]);
DP[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

for (let i = 3; i < num; i++) {
  DP[i] = Math.max(DP[i - 2] + stairs[i], d[i + 3] + stairs[i - 1] + stairs[i]);
}
