function solution(n) {
  let answer = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  let sum = answer.reduce((a, b) => a + b, 0);
  return sum;
}
