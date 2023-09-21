function solution(num, total) {
  const arr = new Array(num).fill(0)
  const first = Math.ceil(total / num) - Math.floor(num / 2)

  return arr.map((el, key) => first + key)
}
