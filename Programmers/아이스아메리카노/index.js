function solution(money) {
  let answer = []
  let coffee = Math.floor(money / 5500)
  let finallyMoney = money % 5500

  answer[0] = coffee
  answer[1] = finallyMoney

  return answer
}
