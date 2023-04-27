function solution(sizes) {
  let widthArr = []
  let heightArr = []

  for (let i = 0; i < sizes.length; i++) {
    const max = Math.max(sizes[i][0], sizes[i][1])
    const min = Math.min(sizes[i][0], sizes[i][1])
    widthArr.push(max)
    heightArr.push(min)
  }

  return Math.max(...widthArr) * Math.max(...heightArr)
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
])
