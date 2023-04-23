function solution(start, end) {
  const answer = []
  for (let i = start; i <= end; i++) {
    answer.push(i)
    console.log(answer)
  }
  return answer
}

solution(3, 10)
