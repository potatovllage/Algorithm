// 프로그래머스 음양 더하기

function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      answer = answer + absolutes[i];
    } else {
      answer = answer - absolutes[i];
    }
  }
  return answer;
}
