const solution = (numbers, target) => {
  // 정답이 들어갈 변수
  let ans = 0

  // dfs 함수
  function dfs(index, sum) {
    // 만약 index 값이 numbers 배열의 길이가 같다면
    if (index === numbers.length) {
      // sum과 target(나와야 하는 값)이 같다면
      if (sum === target) {
        // 정답이 들어갈 변수에 1을 더해준다.
        ans += 1
      }
      return
    }
    dfs(index + 1, sum + numbers[index])
    dfs(index + 1, sum - numbers[index])
  }

  dfs(0, 0)
  return ans
}
