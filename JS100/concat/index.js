// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

// 데이터
const year = "2019";
const month = "04";
const day = "26";
const hour = "11";
const minute = "34";
const second = "27";

// 이전 답
// const result = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;

// 답
const result = year.concat('/', month, '/', day, " ", hour, ':', minute, ':', second);

console.log(result);

// 출력
// 2019/04/26 11:34:27
