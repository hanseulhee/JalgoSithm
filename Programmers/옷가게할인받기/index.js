function solution(price) {
  let discount = 0
  if (price >= 500000) {
    discount = price * 0.2
  } else if (price >= 300000) {
    discount = price * 0.1
  } else if (price >= 100000) {
    discount = price * 0.05
  }
  return price - Math.ceil(discount)
}
