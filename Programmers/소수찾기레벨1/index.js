const solution = (n) => {
  const isPrime = Array(n + 1).fill(true);
  const arr = [];
  for (let i = 2; i < n + 1; i++) {
    if (!isPrime[i]) continue;
    arr.push(i);

    for (let j = i + i; j < n + 1; j += i) {
      isPrime[j] = false;
    }
  }
  return arr.length;
};

