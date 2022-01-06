function solution(number, k) {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    let now = number[i];
    while (k > 0 && stack[stack.length - 1] < now) {
      stack.pop();
      k--;
    }
    stack.push(now);
  }
  return stack.slice(0, stack.length - k).join("");
}

solution("1924", 2);
