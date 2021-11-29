// 아스키 코드 사용
function solution(s, n) {
  return s
    .split("")
    .map((v) => {
      if (v === " ") return v; // 공백일 경우 공백을 리턴
      return v.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(v.charCodeAt() + n - 26)
        : String.fromCharCode(v.charCodeAt() + n);
    })
    .join("");
}