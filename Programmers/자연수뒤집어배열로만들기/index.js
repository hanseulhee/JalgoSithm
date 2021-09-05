const solution = (n) => {
  const tempN = n;
  const n_arr = tempN.toString().split("").reverse();
  const answer = n_arr.map((item) => parseInt(item));
  return answer;
};

