function solution(q, r, code) {
  let answer = ''

  for (let i = r; i < code.length; i++) {
    if (i % q === r) {
      answer += code[i]
    }
  }
  return answer
}
