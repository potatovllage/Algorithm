function solution(s) {
  let balence = 0;

  if (s[0] === ")") return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      balence++;
    } else {
      balence--;
      if (balence < 0) return false;
    }
  }

  return balence === 0 ? true : false;
}
