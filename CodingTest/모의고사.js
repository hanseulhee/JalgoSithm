function solution(answers) {
  const result = []

  const people1 = [1, 2, 3, 4, 5]
  const people2 = [2, 1, 2, 3, 2, 4, 2, 5]
  const people3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  let score = [0, 0, 0]

  for (let i = 0; i < answers.length; i++) {
    if (people1[i % people1.length] === answers[i]) {
      score[0]++
    }
    if (people2[i % people2.length] === answers[i]) {
      score[1]++
    }
    if (people3[i % people3.length] === answers[i]) {
      score[2]++
    }
  }
  const brain = Math.max(score[0], score[1], score[2])
  
  for (let i = 0; i < score.length; i++) {
    if (score[i] == brain) {
      result.push(i + 1)
    }
  }
  return result
}

solution([1, 2, 3, 4, 5])
