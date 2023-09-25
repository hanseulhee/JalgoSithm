// eval()은 문자열을 코드로 인식하게 하는 함수

function solution(quiz) {
  let answer = []

  for (let q of quiz) {
    let c = q.split('=')
    answer.push(eval(c[0]) === +c[1] ? 'O' : 'X')
  }

  return answer
}
