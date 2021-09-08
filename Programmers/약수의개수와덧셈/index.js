// const getAliquot = (n) => {
//   const aliquots = [];
//   for (let i = 1; i < n ** 0.5 + 1; i++) {
//     if (n % i === 0) {
//       aliquots.push(i);
//       if (n / i !== i) aliquots.push(n / i);
//     }
//   }
//   return aliquots;
// };
// const solution = (left, right) => {
//   let answer = 0;
//   for (let i = left; i < right + 1; i++) {
//     // const aliquots = getAliquot(i);
//     // console.log(aliquots.length);
//     const { length } = getAliquot(i);
//     answer += length % 2 === 0 ? i : -i;
//   }

//   return answer;
// };

const solution = (left, right) => {
  let answer = 0;
  for (let i = left; i < right + 1; i++)
    answer += Number.isInteger(Math.sqrt(i)) ? -i : i;
  return answer;
};




const solution = (left, right) => {
    Array(right - left + 1)
      .fill()
      .map((_, i) => left + i)
      .reduce((ac, cu) => (ac += Number.isInteger(Math.sqrt(cu)) ? -cu : cu));
  };
  