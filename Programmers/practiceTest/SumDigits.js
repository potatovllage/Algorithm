function solution(n) {
  var answer = 0;
  var m = String(n); // n을 문자열로 바꿔주기

  for (let i = 0; i < m.length; i++) {
    answer += Number(m[i]); //m을 다시 정수로 바꿔주기
  }
  return answer;
}
