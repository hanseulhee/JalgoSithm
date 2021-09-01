# JalgoSithm

✏ Algorithm with JavaScript

#### 2021.08.16

- [자릿수 더하기](../master/Programmers/자릿수더하기/index.js)

split는 문자열만 가능하다. 정수형을 [toString](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)을 이용해 문자열로 변경 후 split로 쪼갰다.
덧셈을 하기 위해 [map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)메소드로 정수형 변환을 하였고 마지막으로 reduce를 이용해 모든 수를 더했다.

#### 2021.08.17

- [짝수와 홀수](../master/Programmers/짝수와홀수/index.js)

if문으로 짝수 홀수를 구분하였고 이에 맞는 메세지를 반환시켰다.

#### 2021.08.18

- [평균 구하기](../master/Programmers/평균구하기/index.js)

[reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)를 이용하여 배열의 합을 구하고 배열의 길이로 나누어 평균을 구했다. reduce는 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환한다.

#### 2021.08.19

- [핸드폰 번호 가리기](../master/Programmers/핸드폰번호가리기/index.js)

[repeat](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)메소드를 이용해 문자열 길이의 4를 뺀 만큼 \*를 반복했고 [slice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice)로 뒤에서 4자리 문자열을 가져와 반환하였다.

#### 2021.08.20

- [정수 내림차순으로 배치하기](../master/Programmers/정수내림차순으로배치하기/index.js)

[Number](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)은 숫자 형식으로 변환하는 함수다. 이를 이용해 마지막에 문자형이 아닌 정수형으로 반환하였다. toString로 정수형을 문자형으로 바꿔주고 [split]()로 하나씩 잘라 배열로 만들었다. [sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)로 정렬했고 reverse로 내림차순으로 만들었다.

#### 2021.08.21

- [직사각형별찍기](../master/Programmers/직사각형별찍기/index.js)

repeat 메소드를 이용해 가로 별을 찍었고 마지막에 줄 바꿈도 하도록 했다. 이를 큰 가로로 묶어 세로 길이를 곱했다.

#### 2021.08.22

- [나누어 떨어지는 숫자 배열](../master/Programmers/나누어떨어지는숫자배열/index.js)

[filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)를 이용해 arr 배열의 요소가 divisor로 나누어떨어지는지 계산해 새로운 배열로 반환하였다. 새로 반환한 배열을 [sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)로 오름차순 정렬했다. [삼항 조건 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)를 이용해 0이 아닐 경우 -1을 반환하도록 하였다.

#### 2021.08.23

- [문자열 내림차순으로 배치하기](../master/Programmers/문자열내림차순으로배치하기/index.js)

문자를 큰것부터 작은 순으로 정렬하는 문제, sort와 reverse 메소드를 이용해 내림차순으로 정렬했고 join으로 문자열로 바꾸어 반환하였다. sort 메소드는 대문자 소문자 별로 정렬시킨다.

#### 2021.08.24

- [제일 작은 수 제거하기](../master/Programmers/제일작은수제거하기/index.js)

[Math.min](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min) 함수를 이용해 arr 배열의 제일 작은 수를 구하고 [indexOf](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)로 해당 배열의 값을 찾았다. [splice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)를 이용헤 제일 작은 수 를 제거한 배열을 반환하였다.

#### 2021.08.25

- [x만큼 간격이 있는 n개의 숫자](../master/Programmers/x만큼간격이있는n개의숫자/index.js)

배열을 만들고 for문을 이용해 n의 길이만큼 각 요소를 돌며 i를 증가시켰다. 그 다음 [push](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 메소드로 배열에 요소를 추가하여 반환하였다.

#### 2021.08.26

- [부족한 금액 계산하기](../master/Programmers/부족한금액계산하기/index.js)

for문을 이용해 count의 길이만큼 i를 price에 곱해 배열에 push하였다. sum 변수에 reduce로 원소들을 더했다. 이후 if문을 이용해 돈이 sum 보다 많을 경우와 아닐 경우를 구분해 반환하였다. +[Math.abs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)함수는 주어진 숫자의 절대값을 반환한다.

#### 2021.08.27

- [수박수박수박수박수박수?](<../master/Programmers/수박(문자열길이)/index.js>)

[substring](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring) 메소드를 이용해 인덱스 0 부터 n까지 문자열을 반환하도록 하였고 repeat 메소드를 이용해 문자열을 반복시켰다.

#### 2021.08.28

- [두 정수 사이의 합](../master/Programmers/두정수사이의합/index.js)

등차수열의 합 공식을 이용하였다. 등차수열의 합 공식 : S = (∣a−b∣+1) ∗ (a+b) / 2

절대값을 반환해주는 Math.abs 함수를 이용하여 풀었다.

#### 2021.08.29

- [서울에서 김서방 찾기](../master/Programmers/서울에서김서방찾기/index.js)

[indexOf](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)를 이용해 배열에서 "Kim"이 어디있는지 찾았고 연산자 + 를 이용해 문자열을 연결해주었다.

#### 2021.08.30

- [같은 숫자는 싫어](../master/Programmers/같은숫자는싫어/index.js)

빈 배열을 만들고 빈 배열에 arr 배열 값을 넣을 때마다 중복된 값인지 확인하는 코드를 짜려 했지만 어려웠다 ...
[filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 메소드를 이용해 현재 인덱스의 요소와 다음 인덱스의 요소가 다르면 새로운 배열에 추가해 새로운 배열의 형태로 반환하였다.

#### 2021.08.31

- [가운데 글자 가져오기](../master/Programmers/가운데글자가져오기/index.js)

삼항연산자를 이용해 길이가 짝수일 경우 홀수일 경우를 나누어 slice로 계산해주었다. [Destructuring](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)을 이용해 코드의 가독성을 높였다.

#### 2021.09.01

- [콜라츠 추측](../master/Programmers/콜라츠추측/index.js)

주어진 변수 n을 tempN에 할당 후, while문을 이용해 tempN이 1이될 때 까지 반복하도록 하였다. 삼항연산자를 이용해 짝수, 홀수의 경우를 나누고 while을 돌면서 count 변수에 1을 더해주었다. 만약 count가 500이 넘으면 -1을 반환하도록 하였다.
