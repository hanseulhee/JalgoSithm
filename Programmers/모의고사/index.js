const solution = (answers) => {
  const answer = [];
  const eachPeopleAnswer = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const correctAnswer = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (eachPeopleAnswer[0][i % 5] === answers[i]) {
      correctAnswer[0]++;
    }
    if (eachPeopleAnswer[1][i % 8] === answers[i]) {
      correctAnswer[1]++;
    }
    if (eachPeopleAnswer[2][i % 10] === answers[i]) {
      correctAnswer[2]++;
    }
  }

  const max = Math.max(...correctAnswer);

  for (let j = 0; j < correctAnswer.length; j++) {
    if (correctAnswer[j] == max) answer.push(j + 1);
  }

  return answer;
};
