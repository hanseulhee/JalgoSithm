const solution = (x) => {
  const num = x
    .toString()
    .split("")
    .map((e) => parseInt(e));

  const answer = num.reduce((prev, curr) => prev + curr);
  return x % answer === 0 ? true : false;
};

solution(18);
