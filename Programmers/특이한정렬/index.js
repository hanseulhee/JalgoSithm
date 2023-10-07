// Math.abs는 절댓값을 리턴해주는 함수

function solution(numlist, n) {
  let answer = []
  answer = numlist.sort((a, b) => {
    // 절댓값을 계산해 같다면 내림차순
    // 4를 기준으로 3과 5는 절댓값이 같지만 더 큰 5가 와야되므로 내림차순
    if (Math.abs(a - n) === Math.abs(b - n)) {
      return b - a
    } else {
      // 안 같다면 오름차순 정렬
      return Math.abs(a - n) - Math.abs(b - n)
    }
  })
  return answer
}
