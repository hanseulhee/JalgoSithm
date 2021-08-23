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

[repeat](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)메소드를 이용해 문자열 길이의 4를 뺀 만큼 *를 반복했고 [slice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice)로 뒤에서 4자리 문자열을 가져와 반환하였다.

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

