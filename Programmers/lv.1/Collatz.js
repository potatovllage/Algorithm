// 콜라츠 추측

function solution(num) {
  if (num === 1) {
    return 0;
  }

  for (let i = 0; i < 501; i++) {
    if (num === 1) {
      return i;
      break;
    } else if (i === 500) {
      return -1;
    } else if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 2 !== 0) {
      num = num * 3 + 1;
    }
  }
}
