function solution(numbers, n) {
  let answer = 0
  for (let i = 0; i <= numbers.length; i++) {
    answer += numbers[i]
    if (answer > n) {
      console.log(answer)
      return answer
    } else {
      continue
    }
  }
}

solution([58, 44, 27, 10, 100], 139)
