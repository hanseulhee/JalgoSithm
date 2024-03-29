# 코딩 테스트 준비

## 날짜별 푼 문제 중 기록하고 싶은 내용들을 기록합니다

for of 는 **배열**의 반복에서

for in은 **객체**의 반복에서 사용한다.

<b>2022.05.18</b>

[수박수박수박수박수박수?](%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98.js)

```javascript
str.substring(start, end);
```

substring은 start부터 end의 전까지 잘라서 반환한다.

참고 - [문자열 자르기](https://codechacha.com/ko/javascript-how-to-substring/)

<b>2022.05.22</b>

[문자열내마음대로정렬하기](%EB%AC%B8%EC%9E%90%EC%97%B4%EB%82%B4%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0.js)

```javascript
strings.sort((a, b) => {});
```

위의 코드에서 a, b는 next, prev와 같다. 즉, sort((next, prev)=>{});이다.

반환 값이 0보다 크다면 a 먼저, 반환 값이 0이라면 그대로, 반환 값이 0보다 작다면 b가 먼저 온다.

참고 - [Array.prototype.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) [Javascript Sort함수](https://velog.io/@jakeseo_me/Javascript-Sort%ED%95%A8%EC%88%98%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9E%A1%EC%A7%80%EC%8B%9D) [String.prototype.localeCompare()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

[문자열내림차순으로배치하기](%EB%AC%B8%EC%9E%90%EC%97%B4%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0.js)

sort 함수에서 reverse를 사용하면 내림차순으로 정렬한다.

<b>2022.05.31</b>

[K번째수](./K%EB%B2%88%EC%A7%B8%EC%88%98.js)

slice와 splice의 대표적인 차이점은 slice는 자른 배열을 새로운 배열 객체로 반환하여 기존의 배열은 수정하지 않지만 splice는 기존의 배열 자체를 수정 변경한다.

```javascript
sort((a, b) => a - b); // 오름차순 정렬
sort((a, b) => b - a); // 내림차순 정렬
```

<b>sort는 왜 .sort()만으로 정렬이 안될까 ?</b>

-> sort 함수는 기본적으로 배열을 string 타입으로 간주하고 비교하기 때문이다.

아래 코드와 같이 문자열로 비교하기 때문에 9와 1을 비교해 90이 100보다 더 크다고 간주한다.

```javascript
let arr = [90, 100, 110];
arr.sort(); // [100, 110, 90]
```

따라서 arr.sort([compareFunction])이런 형태로 사용한다.

<b>2022.06.03</b>

[2016년](./2016%EB%85%84.js)

Date()를 사용하지 않고 풀어보았다. a달 전까지의 모든 달의 날짜 수들을 더한 후 b-1의 일까지 더해 총 일 수를 구했다.
총 일 수를 7로 나누어 답을 반환하였다.

<b>2022.06.04</b>

[음양더하기](%EC%9D%8C%EC%96%91%EB%8D%94%ED%95%98%EA%B8%B0.js)

단순하게 if문을 이용하여 false일 경우 마이너스를 붙여주었다.

[삼항연산자](../Programmers/%EC%9D%8C%EC%96%91%EB%8D%94%ED%95%98%EA%B8%B0/index.js) 이외에도 <b>forEach</b>를 이용하여 풀어보았다.

forEach는 map과 비슷하지만 map과 다르게 forEach는 따로 return 하는 값이 없다.

<b>2022.06.05</b>

[모의고사](./%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC.js)

한 사람마다 문제 찍는 규칙을 배열로 정의하였고 answers 배열을 돌며 수포자의 답과 일치할 경우 score에 점수를 더하였다.
이후 score의 최댓값을 구해 result를 반환하였다.

<b>2022.06.06</b>

[문자열을 정수로 바꾸기](./%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84%EC%A0%95%EC%88%98%EB%A1%9C%EB%B0%94%EA%BE%B8%EA%B8%B0.js)

문자열을 정수로 변환하기 위해 Number 메소드를 사용하였다.

정수 값만일 경우 parseInt 메소드도 사용할 수 있다.

<b>2023.04.23</b>

[문자열의 앞의 n글자](./Basic/문자열의앞의n글자.js)

slice 함수는 첫번째 인자를 시작, 두번째 인자를 종료 인덱스로 받는다.

[문자열의뒤의n글자](./Basic/문자열의뒤의n글자.js)

slice 함수를 이용해 뒤에서 부터 자를 수 있다. (음수)

[정수찾기](./Basic/정수찾기.js)

includes 함수는 배열에 특정 값이 있는 지 포함 여부 확인한다.

includes(검색할 문자)

[n의 배수](./Basic/n의배수.js)

삼항연산자를 사용하자 !!!!!!!

<b>2023.04.24</b>

[머쓱이보다 키 큰 사람](./Introductory/%EB%A8%B8%EC%93%B1%EC%9D%B4%EB%B3%B4%EB%8B%A4%ED%82%A4%ED%81%B0%EC%82%AC%EB%9E%8C.js)

filter 함수는 주어진 함수를 만족하는 요소들을 모아 새 배열로 반환한다.

[문자열뒤집기](./Introductory/%EB%AC%B8%EC%9E%90%EC%97%B4%EB%92%A4%EC%A7%91%EA%B8%B0.js)

reverse는 **배열**의 순서를 반전시킨다. 따라서 이를 사용하기 위해 배열로 먼저 만들어줘야 한다. ex (split(""))

split은 구분자로 문자열을 분리해 배열로 리턴한다.
split(구분자)

[피자 나눠 먹기 3](./Introductory/%ED%94%BC%EC%9E%90%EB%82%98%EB%88%A0%EB%A8%B9%EA%B8%B03.js)

Math.ceil은 소수값이 있을 경우 값을 올림한다.

[삼총사](./Level1/삼총사.js)

주어진 배열에서 3개씩 뽑아서 더했을 경우 0이 되는 경우의 수를 구한다.

[소수만들기](./Level1/소수만들기.js)

소수는 1과 자기 자신만으로만 나누어 떨어지는 수.

```javascript
if (isPrime(sum)) {
  answer = isPrime(sum) == true ? answer + 1 : answer;
}

//위의 함수를 아래와 같이 만들 수 있다.

if (isPrime(sum)) {
  answer++;
}
```

## 정렬

[K번째수](./HighScoreKit/정렬/K번째수.js)

[H-Index](./HighScoreKit/정렬/HIndex.js)

논문을 내림차순으로 정렬한 뒤 인용수와 논문수가 작거나 같아질 때를 구했다.

[가장 큰 수](./HighScoreKit/정렬/가장큰수.js)

배열을 숫자가 아닌 문자열로 정렬을 해야되기 때문에 map을 돌아 문자열로 변환시켰다.

이후 문자를 비교하며 내림차순으로 정렬한 후 합쳤다.

```jsx
.sort((a, b) => b + a - (a + b))
```

에서 **b + a - (a + b)** 가 양수일 경우 자리를 교체한다

ex) (3, 10) => 103 - 310

만약 배열의 원소가 모두 0일 경우 0을 반환한다.

## 해시

두 개의 배열을 비교하여 중복 제거하는 방법

```javascript
array1 = array1.filter((x) => !array2.includes(x));
```

**filter VS Set**

filter은 조건을 주고 해당 조건이 참인 요소를 모아 새로운 배열로 반환한다. (중복값 제거 X, 원하는 데이터만 추출하고 싶을 때 사용) / indexOf나 includes등을 통해 중복된 값을 제거할 수 있다.

Set은 중복되는 값을 제외한다. 중복된 값은 Set 객체에 요소로 저장되지 않는다. (배열에서 중복된 요소를 제거하는데 사용)

[폰켓몬](./HighScoreKit/해시/폰켓몬.js)

Set 함수는 배열에서 중복된 요소를 제거한다.

set 객체의 요소 개수를 확인할 때는 size를 사용한다. (length 역할)

set 객체에 주어진 값이 있는 지는 has로 확인한다. (boolean)

[완주하지 못한 선수](./HighScoreKit/해시/완주하지못한선수.js)

[의상](./HighScoreKit/해시/의상.js)

## 완전탐색

[최소 직사각형](./HighScoreKit/완전탐색/최소직사각형.js)

[모의고사](./HighScoreKit/완전탐색/모의고사.js)

## 탐욕법

**그리디 알고리즘(탐욕법)**은 미래를 생각하지 않고 각 단계에서 가장 최선의 선택을 하는 기법이다.

[체육복](./HighScoreKit/탐욕법/체육복.js)

`Array(n).fill(1)`

n개의 원소가 담긴 새 배열을 모두 1로 채운다.

`find VS filter`

find는 특정 조건에 맞는 값이 나오는 첫번째 요소 값을 반환하고 filter는 특정 조건에 맞는 모든 값을 반환한다.

[큰 수 만들기](./HighScoreKit/탐욕법/큰수만들기.js)
