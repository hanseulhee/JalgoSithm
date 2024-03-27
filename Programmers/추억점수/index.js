function solution(name, yearning, photo) {
  let answer = []

  for (let i of photo) {
    let x = 0

    for (let j = 0; j < name.length; j++) {
      if (i.includes(name[j])) {
        x += yearning[j]
      }
    }

    answer.push(x)
  }
  return answer
}
