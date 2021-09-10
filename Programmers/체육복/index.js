function solution(n, lost, reserve) {
  const cloths = Array(n + 1).fill(1);
  lost.map((i) => (cloths[i] -= 1));
  reserve.map((i) => (cloths[i] += 1));

  for (let i = 1; i < n + 1; i++) {
    if (cloths[i] !== 2) continue;
    if (cloths[i - 1] === 0) {
      cloths[i] -= 1;
      cloths[i - 1] += 1;
      continue;
    }
    if (cloths[i + 1] === 0) {
      cloths[i] -= 1;
      cloths[i + 1] += 1;
    }
  }

  return cloths.slice(1).filter((i) => i > 0).length;
}
