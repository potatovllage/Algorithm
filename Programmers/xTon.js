//x만큼 간격있는 n개의 숫자

function solution(x, n) {
  var answer = [x];

  console.log(answer[answer.length - 1]);

  for (let i = 1; i < n; i++) {
    answer[i] = answer[answer.length - 1] + x;
  }

  return answer;
}
