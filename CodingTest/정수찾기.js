function solution(num_list, n) {
  const answer = num_list.includes(n) ? 1 : 0
  console.log(answer)
  return answer
}

solution([1, 2, 3, 4, 5], 3)

// function solution(num_list, n) {
//   for (let i = 0; i < num_list.length + 1; i++) {
//     if (num_list[i] !== n) {
//       continue
//     } else {
//       console.log(1)
//       return 1
//     }
//   }
//   console.log(0)
//   return 0
// }

// solution([1, 2, 3, 4, 5], 6)
