function solution(number, limit, power) {
  var answer = 0;
  let nums = [];

  for (let i = 1; i <= number; i++) {
    let divisor = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) divisor += 1;
    }
    nums.push(divisor + 1);
  }

  for (let k = 0; k < nums.length; k++) {
    if (nums[k] > limit) {
      nums[k] = power;
      console.log(nums[k]);
      answer += nums[k];
    } else {
      answer += nums[k];
    }
  }

  console.log(nums);

  return answer;
}
