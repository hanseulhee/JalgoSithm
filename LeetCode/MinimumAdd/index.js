function minAddToMakeValid(s) {
  let left = 0
  let right = 0

  for (let i = 0; i < s.length; i++) {
    // s에서 i번째의 위치에 "("가 있다면
    if (s.charAt(i) == '(') {
      // left 변수에 1을 더한다. 닫을 괄호가 필요하니까
      left++
    }
    // s에서 i번째의 위치에 "("가 없다면
    else {
      // left가 0 보다 크면
      if (left > 0) {
        // left 변수에 1을 감소시킨다.
        left--
      } else {
        // left가 0과 같거나 작으면 right 변수에 1을 더한다.
        right++
      }
    }
  }

  return left + right
}
