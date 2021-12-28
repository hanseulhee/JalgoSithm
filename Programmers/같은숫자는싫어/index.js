// 2021.08.30
// const solution = (arr) => {
//   return arr.filter((val, index) => val != arr[index + 1]);
// };

// 2021.12.29

function solution(arr) {
  const answer = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

solution([4, 4, 4, 3, 3]);
