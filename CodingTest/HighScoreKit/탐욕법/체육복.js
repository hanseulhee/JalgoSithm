function solution(n, lost, reserve) {
  const answer = Array(n).fill(1)

  // 도난 당한 사람은 0
  lost.map((item) => (answer[item - 1] = 0))

  // 여벌이 있는 사람은 +1
  reserve.map((item) => (answer[item - 1] +=1))

  for (let i = 0; i < n; i++) {
    if (answer[i] === 0 && answer[i - 1] === 2) {
      answer[i] = 1
      answer[i - 1] = 1
    } else if (answer[i] === 0 && answer[i + 1] === 2) {
      answer[i] = 1
      answer[i + 1] = 1
    }
  }

  console.log(answer.filter((i) => (i > 0)).length)
  return answer.filter((i) => (i > 0)).length
}

solution(5, [2, 4], [3])

// lost 도난 당함 , reverse 여벌 갖고온 사람
// 수업 들을 수 있는 사람 수
