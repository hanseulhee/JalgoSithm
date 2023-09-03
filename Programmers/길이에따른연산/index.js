function solution(num_list) {
  var answer = 1
  if (num_list.length >= 11) {
    for (let i = 0; i < num_list.length; i++) {
      answer += num_list[i]
    }
    answer = answer - 1
  } else {
    for (let i = 0; i < num_list.length; i++) {
      answer *= num_list[i]
    }
  }
  return answer
}
