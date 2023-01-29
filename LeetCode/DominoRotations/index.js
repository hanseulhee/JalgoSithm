function minDominoRotations(tops, bottoms) {
  const topNumber = tops[0] // tops의 첫번째수
  const bottomNumber = bottoms[0] // bottoms의 첫번째수

  // 'for of 문'은 반복할 수 있는 객체를 순회할 수 있도록 해주는 반복문
  for (const target of [topNumber, bottomNumber]) {
    let countTop = 0
    let countBottom = 0

    for (let i = 0; i < tops.length; i++) {
      // 만약 tops[0] 즉 target이 tops[i]랑 bottoms[i]가 다르면 나옴
      if (target !== tops[i] && target !== bottoms[i]) {
        break
      }
      // 만약 tops[i] 랑 target이랑 다르면 countTop에 1을 더함
      if (tops[i] !== target) {
        countTop++
      }
      // 만약 bottoms[i] 랑 target이랑 다르면 countBottom에 1을 더함
      if (bottoms[i] !== target) {
        countBottom++
      }
      // 만약 i가 tops.length - 1와 같다면 countTop와 countBottom 중 작은 값을 찾아 반환함
      if (i === tops.length - 1) {
        return Math.min(countTop, countBottom)
      }
    }
  }
  // 수행할 수 없으면 -1를 반환함
  return -1
}

