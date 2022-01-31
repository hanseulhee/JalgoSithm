// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

const num = prompt("공백으로 구분하여 10개의 숫자를 입력하세요.")
    .split(" ")
    .map((i) => parseInt(i, 10))
    .sort((a, b) => a - b);

console.log(num.pop());