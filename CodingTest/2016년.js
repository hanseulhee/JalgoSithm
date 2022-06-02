function solution(a, b) {
  const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let result = '';
  let sum = 0;
  for (let i = 1; i < a; i++) {
    sum += day[i - 1];
  }
  result = week[(sum + b - 1) % 7];
  return result;
}

solution(5, 24);
