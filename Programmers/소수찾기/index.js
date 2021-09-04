const solution = (n) => {
  let arr = [];
  const tempN = n;
  for (let i = 1; i <= tempN; i++) {
    arr.push(i);
  }
  for (let i = 1; i * i < tempN; i++) {
    if (arr[i]) {
      let num = arr[i];
      for (let j = num * num; j <= tempN; j += num) {
        arr[j - 1] = 0;
      }
    }
  }
  let answer = arr.filter((number) => number);
  answer.shift();
  return answer.length;
};
