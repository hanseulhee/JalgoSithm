// 2021.11.27
function solution(arr) {
  return arr.length === 1 ? [-1] : arr.filter((x) => x !== Math.min(...arr));
}

// 2021.08.24
// const solution = (arr) => {
//     arr.splice(arr.indexOf(Math.min(...arr)), 1);
//     return arr.length ? arr : [-1];
// }
