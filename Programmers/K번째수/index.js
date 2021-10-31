const solution = (array, commands) => {
  const answer = [];

  for (let i = 0; i < commands.length; i++) {
    const arr = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => {
        return a - b;
      });

    answer.push(arr[commands[i][2] - 1]);
  }
  return answer;
};
