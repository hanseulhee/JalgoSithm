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

// filter는 배열 각 요소에 대해 주어진 함수의 결과값이 true인 요소만 모아 새로운 배열을
// 5로 나눴을 때 나머지가 0