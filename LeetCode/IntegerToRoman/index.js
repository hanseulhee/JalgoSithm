function intToRoman(num) {
  let arr = [
    { 1000: 'M' },
    { 900: 'CM' },
    { 500: 'D' },
    { 400: 'CD' },
    { 100: 'C' },
    { 90: 'XC' },
    { 50: 'L' },
    { 40: 'XL' },
    { 10: 'X' },
    { 9: 'IX' },
    { 5: 'V' },
    { 4: 'IV' },
    { 1: 'I' },
  ]

  // 정답이 들어갈 result 변수
  let result = ''

  for (let i = 0; i < arr.length; i++) {
    // 숫자를 저장
    let keyNum = +Object.keys(arr[i])[0]
    // 소수점 이하를 버린 값 count에 저장
    let count = Math.floor(num / keyNum)
    if (count >= 1) {
      // count만큼 반복하여 새로운 문자열을 result 변수에 담음
      result += arr[i][keyNum].repeat(count)
      // keyNum과 count 곱한 값의 나머지
      num %= keyNum * count
    }
  }

  return result
}
