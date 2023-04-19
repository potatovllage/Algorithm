function solution(nums) {
  let answer = 0;

  // 중복 제거
  let Poket = nums.filter((num, i) => {
    return nums.indexOf(num) === i;
  });

  nums.length / 2 > Poket.length
    ? (answer = Poket.length)
    : (answer = nums.length / 2);

  return answer;
}
