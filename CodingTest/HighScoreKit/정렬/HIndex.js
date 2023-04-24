function solution(citations) {
  let answer = 0
  citations.sort((a, b) => b - a)
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i) {
      answer = answer + 1
    }
  }
  console.log(answer)
  return answer
}

solution([3, 0, 6, 1, 5])
