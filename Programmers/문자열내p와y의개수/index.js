const solution = (s) => {
  const pAnswer = s.toLowerCase().split("p").length - 1;
  const yAnswer = s.toLowerCase().split("y").length - 1;

  return pAnswer === yAnswer;
};
