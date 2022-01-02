// 2021.08.31
// const solution = (s) => {
//   const { length } = s;
//   const half = length / 2;
//   return length % 2 === 0
//     ? s.slice(half - 1, half + 1)
//     : s.slice(half, half + 1);
// };

// 2022.01.02

function solution(s) {
  let answer = "";
  if (s.length % 2 === 0) {
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    answer = s[Math.floor(s.length / 2)];
  }
  return answer;
}

solution("abcde");
