function pivotIndex(nums) {
  let all = nums.reduce((a, b) => a + b)
  let left = 0

  for (let i = 0; i < nums.length; i++) {
    const right = all - left - nums[i]

    if (left === right) return i
    left += nums[i]
  }

  return -1
}
