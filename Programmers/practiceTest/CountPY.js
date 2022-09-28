function solution(s) {
  let countP = 0;
  let countY = 0;
  let arr = String(s).split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "p") {
      countP++;
    } else if (arr[i] === "P") {
      countP++;
    } else if (arr[i] === "y") {
      countY++;
    } else if (arr[i] === "Y") {
      countY++;
    }
  }

  return countP === countY ? true : false;
}
