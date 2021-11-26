// 2021.11.26
function solution(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// 2021.08.20
// const solution = (n) => {
//     return Number(n.toString().split("").sort().reverse().join(""));
// }
