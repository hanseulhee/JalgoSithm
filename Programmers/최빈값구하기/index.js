function solution(array) {
  const check = new Array(1000).fill(0)
  let answer = 0
  let count = 0

  for (let i = 0; i < array.length; i++) check[array[i]] += 1

  for (let i = 1; i < check.length; i++) {
    if (check[answer] < check[i]) {
      answer = i
      count = 1
    } else if (check[answer] == check[i]) count++
  }
  console.log(count)
  if (count > 1) answer = -1
  return answer
}
