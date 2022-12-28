function longestCommonPrefix(strs) {
  let result = '' // 같은 글자 (정답)을 담을 곳
  // 한 단어가 끝났는데 같은 글자가 있는 건 무의미하기 때문에 strs[0].length
  for (let i = 0; i < strs[0].length; i++) {
    // 한 글자 안에서 반복문을 돌기 위함
    for (let j = 1; j < strs.length; j++) {
      // 만약 첫 번째 문자의 첫 글자가 두 번째 문자의 첫 글자와 다르면 놉
      if (strs[0][i] !== strs[j][i]) {
        return result
      }
    }
    // 같다면 result에 첫 번째 문자의 i번째를 넣음
    // 안 같으면 빈 문자열인 result 출력
    result += strs[0][i]
  }

  // 답 출력
  return result
}

longestCommonPrefix(['dog', 'racecar', 'car'])
