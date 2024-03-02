function solution(my_string) {
  let answer = 0
  const regex = /[A-z]/g // 정규식
  let num = my_string.replace(regex, ' ').split(' ') // 대문자, 소문자를 모두 공백으로 바꿈

  for (let i = 0; i < num.length; i++) {
    if (!isNaN(num[i])) { // 매개변수가 숫자인지 검사하는 함수
      answer += Number(num[i])
    }
  }
  return answer
}
