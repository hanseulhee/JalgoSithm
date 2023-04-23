function solution(n) {
  return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1
}

// function solution(n) {
//   let count = 0

//   if (n % 7 === 0) {
//     count += parseInt(n / 7)
//   } else {ƒ
//     count += parseInt(n / 7) + 1
//   }

//   console.log(count)
//   return count
// }

solution(8)
