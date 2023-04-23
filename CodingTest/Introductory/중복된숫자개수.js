function solution(array, n) {
  const answer = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      answer.push(array[i])
    }
  }
  console.log(answer.length)
  return answer.length
}
solution([1, 1, 2, 3, 4, 5], 1)
