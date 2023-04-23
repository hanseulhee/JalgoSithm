function solution(array, height) {
  const answer = array.filter((item) => item > height)
  return answer.length
}

// function solution(array, height) {
//   let answer = 0
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] > height) {
//       answer += 1
//     }
//   }
//   console.log(answer)
// }

solution([200, 120, 140], 190)
