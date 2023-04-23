function solution(n, k) {
  let answer = 0

  let serviceDrink = parseInt(n / 10)
  answer += n * 12000 + k * 2000 - serviceDrink * 2000

  console.log(answer)
  return answer
}

solution(22, 6)

// function solution(n, k) {
//   let answer = 0

//   let serviceDrink = parseInt(n / 10)

//   k = k - serviceDrink
//   answer += n * 12000 + k * 2000

//   console.log(answer)
//   return answer
// }

// solution(22, 6)

// 10인분에 음료수 1개 꽁짜
// 12000 2000
