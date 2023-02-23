// 프로그래머스 없는 숫자 더하기

function solution(numbers) {
  let answer = 0;
  let allSum = 45;

  for (let i = 0; i < numbers.length; i++) {
    answer = answer + numbers[i];
  }

  return allSum - answer;
}
