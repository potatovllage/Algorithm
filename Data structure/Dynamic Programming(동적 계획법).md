# Dynamic Programming(동적 계획법)

다이나믹 프로그래밍이란 복잡한 문제를 간단한 여러 개의 문제로 나누어 푸는 방법을 말한다.
이 다이나믹 프로그래밍은 부분 문제 반복과 최적 부분 구조를 가지고 있는 알고리즘을
일반적인 방법에 비해 더욱 적은 시간 내에 풀 때 사용한다.

주어진 문제를 풀기 위해서, 문제를 여러 개의 하위 문제로 나누어 푼 다음
그것을 결합하여 최종적인 목적에 도달하는 것이다.



## Top-down vs Bottom-up

다이나믹 프로그래밍 문제를 푸는 방법은 Top Down과 Bottom Up이 있다.

두 방법 모두 큰 문제를 여러 개의 부분 문제들로 나누어 풀지만,
Top-down은 가장 큰 문제를 방문 후 작은 문제를 호출하여 답을 찾는 방식이고,
Bottom-up은 가장 작은 문제들부터 답을 구해가며 전체 문제의 답을 찾는 방식이다.

흔히 Top-down은 재귀 호출, Bottom-up은 반복문을 이용해 구현한다.



## 예시 피보나치 수열(JS)

```javascript
// 피보나치 수열 Top down
const fibonacciTop = (number) => {
  let result = [];

  if (number == 0) {
    return 0;
  }
  if (number == 1) {
    return 1;
  }
  if (result[number] != -1) {
    return result[number];
  }

  result[number] = fibonacciTop(number - 1) + fibonacciTop(number - 2);
  console.log(result[number]);
};

fibonacciTop(30);


// 피보나치 수열 bottom up
const fibonacci = (number) => {
  let result = [0, 1];
  if (number === 0) {
    console.log([0]);
  }
  if (number === 1) {
    console.log([0, 1]);
  }
  for (let i = 2; i <= number; i++) {
    result.push(result[i - 2] + result[i - 1]);
    console.log(result);
  }
};

fibonacci(30);
```

