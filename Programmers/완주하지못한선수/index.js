const solution = (participant, completion) => {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
};

// 동명이인이 없을 경우 (차집합)
// const solution = (participant, completion) => {
//   return participant.filter((x) => !completion.includes(x)).toString();
// };
