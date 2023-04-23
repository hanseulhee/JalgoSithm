function solution(num_list, n) {
  const answer = []

  for (let i = 0; i < num_list.length; i++) {
    if (i % n === 0) {
      answer.push(num_list[i])
      console.log(answer)
    }
  }
  return answer
}

solution([4, 2, 6, 1, 7, 6], 4)
