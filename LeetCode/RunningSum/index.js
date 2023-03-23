function runningSum(nums) {
  const answer = []
  answer[0] = nums[0]
  
  for (i = 1; i < nums.length; i++) {
    answer.push(answer[i - 1] + nums[i])
  }
  return answer
}

nums(1,2,3,4)
