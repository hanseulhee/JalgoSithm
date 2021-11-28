// 2021.11.28
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, index) => v * (index + 1));
}

// 2021.08.25
// const solution = (x, n) => {
//   const answer = [];
//   for (let i = 1; i <= n; i++) {
//     answer.push(x * i);
//   }
//   return answer;
// };
