function solution(array) {
  array = array.sort((a, b) => a - b)
  return array[Math.round(array.length / 2) - 1]
}
