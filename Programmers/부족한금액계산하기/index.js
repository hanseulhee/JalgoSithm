const solution = (price, money, count) => {
  const answer = [];
  for (let i = 1; i <= count; i++) {
    answer.push(price * i);
  }
  const sum = answer.reduce((a, b) => a + b);
  if (sum < money) {
    return 0;
  } else {
    return sum - money;
  }
};

// const solution = (price, money, count) => {
//     const prices = [];
//     for (let i = 1; i <= count; i++) {
//         prices.push(price * i);
//     }
//     const sum = prices.reduce((a, b) => a + b);
//     return sum < money ? 0 : sum - money;
// };
