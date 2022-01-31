// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.


const message = prompt("문자를 입력하세요.");
let answer = "";

for(let i = 0; i < message.length; i++){
    message[i] === message[i].toUpperCase() ? answer += message[i].toLowerCase() : answer += message[i].toUpperCase();
}

console.log(answer);