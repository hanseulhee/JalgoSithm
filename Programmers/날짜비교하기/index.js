function solution(date1, date2) {
  let answer = 0
  let i = 0

  while (i < date1.length) {
    if (date1[i] < date2[i]) {
      return 1
    } else if (date1[i] > date2[i]) {
      return 0
    } else {
      i++
    }
  }

  return answer
}
