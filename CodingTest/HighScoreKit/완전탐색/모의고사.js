function solution(answers) {
  const answer = []
  const correctAnswer = [0, 0, 0]

  const person1 = [1, 2, 3, 4, 5]
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5]
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  for (let i = 0; i < answers.length; i++) {
    if (person1[i % 5] === answers[i]) {
      correctAnswer[0]++
    }
    if (person2[i % 8] === answers[i]) {
      correctAnswer[1]++
    }
    if (person3[i % 10] === answers[i]) {
      correctAnswer[2]++
    }
  }

  const max = Math.max(...correctAnswer)

  for (let j = 0; j < correctAnswer.length; j++) {
    if (correctAnswer[j] === max) {
      answer.push(j + 1)
    }
  }

  console.log(answer)
  return answer
}

solution([1, 2, 3, 4, 5])

// 테스트 실패 코드

// function solution(answers) {
//   let answer = []
//   let correctAnswer = [0, 0, 0]

//   const person1 = [1, 2, 3, 4, 5]
//   const person2 = [2, 1, 2, 3, 2, 4, 2, 5]
//   const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

//   for (let i = 0; i < answers.length; i++) {
//     correctAnswer[0] =
//       person1[i] === answers[i] ? correctAnswer[0] + 1 : correctAnswer[0]
//     correctAnswer[1] =
//       person2[i] === answers[i] ? correctAnswer[1] + 1 : correctAnswer[1]
//     correctAnswer[2] =
//       person3[i] === answers[i] ? correctAnswer[2] + 1 : correctAnswer[2]
//   }

//   let max = Math.max(...correctAnswer)

//   for (let j = 0; j < correctAnswer.length; j++) {
//     if (correctAnswer[j] === max) {
//       answer.push(j + 1)
//     }
//   }
//   console.log(answer)
//   return answer
// }

// solution([1, 2, 3, 4, 5])
