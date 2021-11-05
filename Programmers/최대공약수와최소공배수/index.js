const solution = (n, m) => {
  // 최대공약수
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  // 최소공배수
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
};