function solution(my_string, n) {
  console.log(my_string.slice(0, n))
  return my_string.slice(0, n)
}

// function solution(my_string, n) {
//   const answer = []
//   for (let i = 0; i < n; i++) {
//     answer.push(my_string[i])
//   }
//   const result = answer.join('')
//   console.log(result)
//   return result
// }

solution('He110W0r1d', 5)
