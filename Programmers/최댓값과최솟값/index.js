function solution(s) {
  let answer = "";
  let s_arr = s.split(" ");
  const s_max = Math.max.apply(null, s_arr);
  const s_min = Math.min.apply(null, s_arr);
  answer = s_min + " " + s_max;
  return answer;
}

solution("1 2 3 4");

// 리팩토링
function solution(s) {
  return Math.min(...s.split(" ")) + " " + Math.max(...s.split(" "));
}
