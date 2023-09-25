function solution(my_string, queries) {
  let answer = ''

  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0], k = queries[i][1]; j < k; j++, k--) {
      answer = my_string.split('')
      ;[answer[j], answer[k]] = [answer[k], answer[j]]
      my_string = answer.join('')
    }
  }

  return my_string
}
