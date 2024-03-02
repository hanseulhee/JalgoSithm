function solution(chicken) {
  let coupon = 0 // 쿠폰
  let service = 0 // 최대 서비스 치킨의 수

  for (let i = 0; i < chicken; i++) {
    coupon += 1
    if (coupon === 10) {
      coupon = 1
      console.log(coupon)
      service += 1
    }
  }
  return service
}
