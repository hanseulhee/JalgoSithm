// function solution(names) {
//   let answer = []
//   for (let i = 0; i < names.length; i += 5) {
//     answer.push(names[i])
//   }
//   return answer
// }

function solution(names) {
  return names.filter((v, i) => i % 5 == 0)
}
