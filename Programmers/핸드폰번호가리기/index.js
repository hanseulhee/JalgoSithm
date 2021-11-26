// 2021.11.26
function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4)
}


// 2021.08.19
// const solution = (phone_number) => {
//   const answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
//   return answer;
// };
