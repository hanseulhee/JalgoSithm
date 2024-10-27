function solution(cipher, code) {
  const answer = [];

  for (let j = code - 1; j < cipher.length; j += code) {
    answer.push(cipher[j]);
  }

  return answer.join("");
}
