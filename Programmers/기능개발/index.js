const getFinished = (p, s, days) => {
  let finished = 0;
  while (p[0] + s[0] * days >= 100) {
    finished += 1;
    p.shift();
    s.shift();
  }
  return finished;
};

const solution = (progresses, speeds) => {
  const answer = [];
  let days = 1;

  while (progresses.length !== 0) {
    const tempFinished = getFinished(progresses, speeds, days);
    if (tempFinished > 0) answer.push(tempFinished);
    days += 1;
  }
  return answer;
};
