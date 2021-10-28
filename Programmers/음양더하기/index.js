const solution = (absolutes, signs) => {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    signs[i] === true
      ? (answer += absolutes[i])
      : (answer += absolutes[i] * -1);
  }

  return answer;
};