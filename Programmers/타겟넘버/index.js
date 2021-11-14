const solution = (numbers, target) => {
  let ans = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        ans += 1;
      }
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);
  return ans;
};
