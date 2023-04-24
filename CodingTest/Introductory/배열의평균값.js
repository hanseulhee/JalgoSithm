function solution(numbers) {
  let answer = 0
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i]
  }
  answer = answer / numbers.length

  console.log(answer)
  return answer
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
