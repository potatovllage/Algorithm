function solution(n) {
  var answer = [];
  let s = n.toString(); // 숫자를 문자열로 만들고
  for (let i = s.length; i > 0; i--) {
    //String의 맨뒤 글자부터 한글자씩 잘라서 int형으로 변환
    answer.push(Number(s.substr(i - 1, 1)));
  }
  return answer;
}
