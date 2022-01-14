// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

const n = prompt("수를 입력하세요").split(" ");

let quotient = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
let remainder = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(quotient, remainder);