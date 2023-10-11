function solution(my_string) {
  let answer = 0
  const regex = /[A-z]/g
  let num = my_string.replace(regex, ' ').split(' ')

  for (let i = 0; i < num.length; i++) {
    if (!isNaN(num[i])) {
      answer += Number(num[i])
    }
  }
  return answer
}
