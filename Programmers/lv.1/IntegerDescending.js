// 정수 내림차순으로 배치하기

function solution(n) {
  let answer = n + "";
  let answer2 = answer.split("");
  return Number(answer2.sort((a, b) => b - a).join(""));
}
