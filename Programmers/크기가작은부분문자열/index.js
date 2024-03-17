function solution(t, p) {
  let answer = 0

  for (let i = 0; i <= t.length - p.length; i++) {
    const tSlice = t.slice(i, i + p.length)
    if (tSlice <= p) {
      answer++
    }
  }
  return answer
}
