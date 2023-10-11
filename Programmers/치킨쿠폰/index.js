function solution(chicken) {
  let coupon = 0
  let service = 0

  for (let i = 0; i < chicken; i++) {
    coupon += 1
    if (coupon === 10) {
      coupon = 1
      service += 1
    }
  }
  return service
}
