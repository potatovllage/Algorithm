// 서울에서 김서방 찾기

function solution(seoul) {
  let answerValue = 0;

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      answerValue = i;
    }
  }

  console.log(answerValue);

  const answer = "김서방은 " + answerValue + "에 있다";

  console.log(answer);

  return answer;
}
