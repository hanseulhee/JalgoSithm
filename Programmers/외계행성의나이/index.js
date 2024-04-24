function solution(age) {
  let answer = ''
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  let ageString = age.toString()

  for (let i = 0; i < ageString.length; i++) {
    answer = answer + alpha[ageString[i]]
  }

  return answer
}
