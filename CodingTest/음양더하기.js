function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == false) {
      absolutes[i] = -absolutes[i];
    }
    result += absolutes[i];
  }
  return result;
}

solution([1, 2, 3], [false, false, true]);

// forEach

// function solution(absolutes, signs) {
//   let result = 0
//   absolutes.forEach((v, i) => {
//     signs[i] == true ? (result += v) : (result -= v)
//   })
//   return result
// }

// solution([4, 7, 12], [true, false, true])
