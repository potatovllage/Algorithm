function solution(n) {
  var answer = 0;
  //10진 -> 3진수, toString()의 인자로 숫자를 넣어주면, 그 수의 기수(radix)를 반환한다.
  let tmp = n.toString(3);
  tmp = tmp.split("").reverse().join("");
  //3진수를 10진수로 변환 parseInt(변수, 현재진수값);
  answer = parseInt(tmp, 3);
  return answer;
}
