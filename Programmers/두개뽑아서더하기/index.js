const solution = (numbers) => {
  const arr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  const answer = [...new Set(arr)].sort((a, b) => a - b);
  return answer;
};
