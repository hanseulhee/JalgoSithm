// 2021.11.27
function solution(arr, divisor) {
  const answer = [];
  arr.map((x) => x % divisor === 0 && answer.push(x));
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

// 2021.08.22
// const solution = (arr, divisor) => {
//   const answer = arr.filter((arrList) => arrList % divisor === 0).sort((a, b) => a - b);
//   return answer.length === 0 ? [-1] :answer;
// };
