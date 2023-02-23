// 프로그래머스 숫자 문자열과 영단어
// JavaScript join()과 split()에 대해 찾아보고 이해 해볼 수 있는 문제였던 것 같다.
// 다시 한 번 짜보고 복습해보자

function solution(s) {
  let answer = s;
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }
  return Number(answer);
}
