function solution(number) {
  let answer = 0
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer = answer + 1
        }
      }
    }
  }
  console.log(answer)
  return answer
}

solution([-3, -2, -1, 0, 1, 2, 3])
