// 2021.11.23
function solution(n) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const num = String(n).split("").map(Number).reduce(reducer);
  return num;
}

// 2021.08.16
// const solution = (n) => {
//     const n_string = n.toString();
//     const arr = n_string.split("");
//     const int_arr = arr.map(item => parseInt(item))
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     return int_arr.reduce(reducer);
// }
