// isNaN과 every() 처음 알게됨

function solution(s) {
  let answer = true;

  if (s.length === 4 || s.length === 6) {
    return s.split("").every((c) => !isNaN(c));
  } else {
    answer = false;
  }
  return answer;
}
