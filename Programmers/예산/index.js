// function solution(d, budget) {
//   let arr_sum = 0
//   let two_case = 0

//   d.sort((a, b) => {
//     return a - b
//   })

//   for (let i = 0; i <= d.length - 1; i++) {
//     if (arr_sum < budget - d[i]) {
//       arr_sum += d[i]
//     }
//     if (two_case < budget) {
//       two_case += d[i]
//       if (two_case === budget) {
//         two_case = d.length
//         return two_case
//       }
//     } else {
//       break
//     }
//   }
//   let answer = budget - arr_sum
//   return answer
// }

// solution([2, 2, 3, 3], 10)


// 정답
function solution(d, budget) {
  // 배열 d, budget 예산
  // budget 이하로 합 했을 때 살 수 있는 조합을 구하자

  let count = 0

  d.sort((a, b) => {
    return a - b
  })

  for (let i = 0; i <= d.length - 1; i++) {
    budget = budget - d[i]
    if (0 > budget) {
      return count
    }
    count += 1
  }
  return count
}

solution([2, 2, 3, 3], 10)
