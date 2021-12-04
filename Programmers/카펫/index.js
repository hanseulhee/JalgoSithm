function solution(brown, yellow) {
  const answer = [];
  let sum = brown + yellow;
  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      let weight = sum / height;

      if ((weight - 2) * (height - 2) === yellow) {
        return [weight, height];
      }
    }
  }
  return answer;
}
