function solution(s) {
  return s
    .split(" ")
    .map((x) => {
      let answer = "";
      for (let i = 0; i < x.length; i++) {
        if (i % 2 === 0) answer += x[i].toUpperCase(); // 짝수번째 문자를 대문자로 변환
        else {
          answer += x[i].toLowerCase(); // 소문자로 변환
        }
      }

      return answer;
    })
    .join(" ");
}
