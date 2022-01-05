// 2021.12.24
// function solution(clothes) {
//   let answer = 1;
//   let obj = []; // 빈 객체 생성

//   for (let i = 0; i < clothes.length; i++) {
//     obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
//   }
//   for (let key in obj) {
//     answer *= obj[key];
//   }

//   return answer - 1; // 최소 1가지 이상의 옷을 입기 때문에 -1을 함
// }

// solution([
//   ["yellowhat", "headgear"],
//   ["bluesunglasses", "eyewear"],
//   ["green_turban", "headgear"],
// ]);

// 2022.01.05

function solution(clothes) {
  let answer = 1;
  let arr = [];
  for (let i = 0; i < clothes.length; i++) {
    arr[clothes[i][1]] = (arr[clothes[i][1]] || 1) + 1;
  }
  for (let key in arr) {
    answer *= arr[key];
  }
  return answer - 1;
}

solution([
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
