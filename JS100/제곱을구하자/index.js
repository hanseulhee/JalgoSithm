// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

const n = prompt("수를 입력하세요").split(" ");
console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
