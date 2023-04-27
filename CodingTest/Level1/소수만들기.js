// 소수 판별 함수
function isPrime(sum) {
  for (let i = 2; i < sum; i++) {
    if (sum % i === 0) {
      return false
    }
  }
  return true
}

function solution(nums) {
  let answer = 0
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k]
        if (isPrime(sum)) {
          answer++
        }
      }
    }
  }
  console.log(answer)
  return answer
}

solution([1, 2, 3, 4])
