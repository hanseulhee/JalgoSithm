// 2021.09.01
// const solution = (n) => {
//   let count = 0;
//   let tempN = n;

//   while (tempN !== 1) {
//     tempN = tempN % 2 === 0 ? tempN / 2 : tempN * 3 + 1;
//     count += 1 ;

//     if (count > 500) {
//       count = -1;
//       break;
//     }
//   }

//   return count;
// };

// 2022.01.05
function solution(num) {
  let answer = 0;
  while (num !== 1) {
    if (answer > 500) {
      return -1;
    }
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    answer++;
  }

  return answer;
}

solution(16);
