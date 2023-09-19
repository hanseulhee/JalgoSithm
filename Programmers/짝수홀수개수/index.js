function solution(num_list) {
  const answer = []
  let evenCnt = 0 // 짝수
  let oddCnt = 0 // 홀수

  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 === 0 ? evenCnt++ : oddCnt++
  }

  answer[0] = evenCnt
  answer[1] = oddCnt

  return answer
}
