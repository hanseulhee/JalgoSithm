const solution = (a, b) => {
  let answer = "";
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let number = 0;
  for (var i = 1; i < a; i++) {
    number += month[i-1];
  }
  number += b-1;
  answer = day[number % 7];
  return answer;
};

