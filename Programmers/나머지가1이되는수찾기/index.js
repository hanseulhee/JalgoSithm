// 리팩토링 전

// const solution = (n) => {
//   const arr = [];
//   for (let i = 1; i < n; i++) {
//     if (n % i === 1) {
//       arr.push(i);
//     }
//   }
//   const answer = Math.min(...arr);
//   return answer;
// };

const solution = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i == 1) {
      return i;
    }
  }
};