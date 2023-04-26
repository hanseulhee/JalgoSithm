function solution(participant, completion) {
  let answer = ''
  participant.sort()
  completion.sort()

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i]
      break
    }
  }
  return answer
}

solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])

// function solution(participant, completion) {
//   participant.sort()
//   completion.sort()

//   for (let i in participant) {
//     if (participant[i] !== completion[i]) return participant[i]
//   }

// }

// solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])
