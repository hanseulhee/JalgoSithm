# JalgoSithm

✏ Algorithm with JavaScript

### 2021.08.16

- [자릿수 더하기](../master/Programmers/자릿수더하기/index.js)

split는 문자열만 가능하다. 정수형을 [toString](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)을 이용해 문자열로 변경 후 split로 쪼갰다.
덧셈을 하기 위해 [map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)메소드로 정수형 변환을 하였고 마지막으로 reduce를 이용해 모든 수를 더했다.


👁‍🗨 2021.11.24

문자열로 변환하는 여러 방법이 있지만 String 함수와 toString 함수의 차이점을 알아보았다.


**String vs toString**


두 함수 모두 주어진 인자를 문자열로 형변환하여 반환한다.

String() 함수는 new 키워드와 함께 새로운 문자열 객체의 생성자가 될 수 있다.
toString 함수는 문자열의 메소드로 사용될 경우 valueOf 와 동일한 역할을 수행하고 숫자의 메소드로 사용될 경우에는 인자로 2 ~ 36 사이의 값을 대입하면 숫자를 해당 진수로 변환한 문자열을 얻을 수 있다.


목적에 따라 다른 기능을 수행할 수 있을 것같다.


**문자열 배열을 정수 배열로 변환**

전에는 map과 parseInt로 풀었는데 map(Number)코드로 변환할 수 있었다.


### 2021.08.17

- [짝수와 홀수](../master/Programmers/짝수와홀수/index.js)

if문으로 짝수 홀수를 구분하였고 이에 맞는 메세지를 반환시켰다.


👁‍🗨 2021.11.24

삼항연산자를 통해 한 줄로 풀 수 있었다.
== 과 === 의 차이를 찾아보았다.


**== vs ===**

동등 연산자(==)는 두 피연산자의 자료형을 일치시킨 후 비교를 수행한다.

```js
1 == 1 // true
"1" == 1 // true
1 == "1" // true
```

일치 연산자(===)는 자료형 변환없이 두 피연산자가 같은지 판별한다.

```js
1 === 1 // true
"1" === 1 // false
```

따라서 ==는 변수 값을 기반으로 비교하지만 ===는 변수 유형을 고려해 비교한다.


### 2021.08.18

- [평균 구하기](../master/Programmers/평균구하기/index.js)

[reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)를 이용하여 배열의 합을 구하고 배열의 길이로 나누어 평균을 구했다. reduce는 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환한다.


👁‍🗨 2021.11.25

**reduce**

```js
배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과}, 초깃값);
```
누적값이기 때문에 reduce 메서드로 배열의 합과 관련된 문제에 많이 쓰인다.


**callback 함수**

다른 함수의 인자로써 이용되는 함수, 어떤 이벤트에 의해 호출되어지는 함수이다.

즉 어떤 일을 다른 객체에게 시키고, 그 일이 끝나는 것은 기다리지 않고 끝나고 부를 때까지 다른 일을 하는 것 (비동기식 처리방법)


- 문제점

콜백 함수를 많이 중첩하게 되면 코드의 들여쓰기 수준 감당이 어려워지고 코드 가독성이 떨어져 콜백 지옥에 빠질 수 있다. 이러한 점들로 Promise나 async/await 등을 이용하는 방법으로 대체되고 있다.


**비동기**

요청 후 응답과 관계없이 다음 동작을 실행하는 방식

### 2021.08.19

- [핸드폰 번호 가리기](../master/Programmers/핸드폰번호가리기/index.js)

[repeat](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)메소드를 이용해 문자열 길이의 4를 뺀 만큼 *를 반복했고 [slice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice)로 뒤에서 4자리 문자열을 가져와 반환하였다.



👁‍🗨 2021.11.26

*을 phone_number 뒤에서 4자리 전까지 반복 후 뒤에 phone_number 뒤에서 4자리 문자열을 붙여 반환하였다.

[slice vs substring](https://velog.io/@seulhyi/javascript%EC%9D%98-substring-VS-slice)


### 2021.08.20

- [정수 내림차순으로 배치하기](../master/Programmers/정수내림차순으로배치하기/index.js)

[Number](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)은 숫자 형식으로 변환하는 함수다. 이를 이용해 마지막에 문자형이 아닌 정수형으로 반환하였다. toString로 정수형을 문자형으로 바꿔주고 [split]()로 하나씩 잘라 배열로 만들었다. [sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)로 정렬했고 reverse로 내림차순으로 만들었다.


👁‍🗨 2021.11.26

sort로 내림차순 정렬을 하였다.
[join](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 메소드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.



### 2021.08.21

- [직사각형별찍기](../master/Programmers/직사각형별찍기/index.js)

repeat 메소드를 이용해 가로 별을 찍었고 마지막에 줄 바꿈도 하도록 했다. 이를 큰 가로로 묶어 세로 길이를 곱했다.


### 2021.08.22

- [나누어 떨어지는 숫자 배열](../master/Programmers/나누어떨어지는숫자배열/index.js)

[filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)를 이용해 arr 배열의 요소가 divisor로 나누어떨어지는지 계산해 새로운 배열로 반환하였다. 새로 반환한 배열을 [sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)로 오름차순 정렬했다. [삼항 조건 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)를 이용해 0이 아닐 경우 -1을 반환하도록 하였다.


👁‍🗨 2021.11.27

filter로 풀었기 때문에 map을 이용해 풀려했으나 map은 계산식을 사용하면 배열상태에 true, false로 찍혀 값을 answer이라는 배열에 push하였다.

filter는 배열 각 요소에 대해 주어진 함수의 결과값이 true인 요소만 모아 새로운 배열을 반환하기 때문에 map과 다른 점이 있었다.


**map vs forEach**


map은 새로운 배열을 반환하지만 forEach는 array를 결과로 가지기 위해서 push를 통해 배열을 만들어줘야한다.
배열을 순회하려면 forEach, 배열을 순회 후 새 배열을 얻고 싶다면 map을 사용한다고 생각하면 될 것 같다.


### 2021.08.23

- [문자열 내림차순으로 배치하기](../master/Programmers/문자열내림차순으로배치하기/index.js)

문자를 큰 것부터 작은 순으로 정렬하는 문제, sort와 reverse 메소드를 이용해 내림차순으로 정렬했고 join으로 문자열로 바꾸어 반환하였다. sort 메소드는 대문자 소문자 별로 정렬시킨다.


👁‍🗨 2021.11.27

sort 메소드를 써 대문자가 소문자보다 더 작은 것으로 간주할 수 있다.


### 2021.08.24

- [제일 작은 수 제거하기](../master/Programmers/제일작은수제거하기/index.js)

[Math.min](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min) 함수를 이용해 arr 배열의 제일 작은 수를 구하고 [indexOf](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)로 해당 배열의 값을 찾았다. [splice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)를 이용헤 제일 작은 수 를 제거한 배열을 반환하였다.


👁‍🗨 2021.11.27

arr의 길이가 1일경우 [-1]을 반환하고 아니라면 filter을 이용해 배열에서 최솟값을 제외한 배열을 반환하였다.


**배열 최솟값 구하기**


for문도 있으나 [Math.min()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min)으로 쉽게 구할 수 있다.


**splice vs slice**

slice는 원본 배열을 수정하지 않고 새로운 배열을 만드는 것과 다르게 splice는 원본 배열 자체를 수정한다.


### 2021.08.25

- [x만큼 간격이 있는 n개의 숫자](../master/Programmers/x만큼간격이있는n개의숫자/index.js)

배열을 만들고 for문을 이용해 n의 길이만큼 각 요소를 돌며 i를 증가시켰다. 그 다음 [push](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 메소드로 배열에 요소를 추가하여 반환하였다.


👁‍🗨 2021.11.28

[Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)를 이용해 n길이만큼의 배열을 생성 후 fill을 이용하여 x로 배열을 채웠다. 이후 map을 이용하여 계산 후 반환하였다.

index는 0부터 시작한다.
```js
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, index) => v * (index + 1)); 
}
```


**fill**


fill 메소드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채우는 메소드다.
만약 m개의 길이만큼의 배열을 n으로 시작하는 값으로 채우고 싶다면 fill 메소드를 생각하면 될 것같다.


### 2021.08.26

- [부족한 금액 계산하기](../master/Programmers/부족한금액계산하기/index.js)

for문을 이용해 count의 길이만큼 i를 price에 곱해 배열에 push하였다. sum 변수에 reduce로 원소들을 더했다. 이후 if문을 이용해 돈이 sum 보다 많을 경우와 아닐 경우를 구분해 반환하였다. +[Math.abs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)함수는 주어진 숫자의 절대값을 반환한다.


### 2021.08.27

- [수박수박수박수박수박수?](<../master/Programmers/수박(문자열길이)/index.js>)

[substring](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring) 메소드를 이용해 인덱스 0 부터 n까지 문자열을 반환하도록 하였고 repeat 메소드를 이용해 문자열을 반복시켰다.

### 2021.08.28

- [두 정수 사이의 합](../master/Programmers/두정수사이의합/index.js)

등차수열의 합 공식을 이용하였다. 등차수열의 합 공식 : S = (∣a−b∣+1) ∗ (a+b) / 2

절대값을 반환해주는 Math.abs 함수를 이용하여 풀었다.

### 2021.08.29

- [서울에서 김서방 찾기](../master/Programmers/서울에서김서방찾기/index.js)

[indexOf](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)를 이용해 배열에서 "Kim"이 어디있는지 찾았고 연산자 + 를 이용해 문자열을 연결해주었다.

### 2021.08.30

- [같은 숫자는 싫어](../master/Programmers/같은숫자는싫어/index.js)

빈 배열을 만들고 빈 배열에 arr 배열 값을 넣을 때마다 중복된 값인지 확인하는 코드를 짜려 했지만 어려웠다 ...
[filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 메소드를 이용해 현재 인덱스의 요소와 다음 인덱스의 요소가 다르면 새로운 배열에 추가해 새로운 배열의 형태로 반환하였다.

### 2021.08.31

- [가운데 글자 가져오기](../master/Programmers/가운데글자가져오기/index.js)

삼항연산자를 이용해 길이가 짝수일 경우 홀수일 경우를 나누어 slice로 계산해주었다. [Destructuring](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)을 이용해 코드의 가독성을 높였다.

### 2021.09.01

- [콜라츠 추측](../master/Programmers/콜라츠추측/index.js)

주어진 변수 n을 tempN에 할당 후, while문을 이용해 tempN이 1이될 때 까지 반복하도록 하였다. 삼항연산자를 이용해 짝수, 홀수의 경우를 나누고 while을 돌면서 count 변수에 1을 더해주었다. 만약 count가 500이 넘으면 -1을 반환하도록 하였다.

### 2021.09.02

- [약수의 합](../master/Programmers/약수의합/index.js)

for문을 이용해 입력 값 안에서 if문으로 약수인지 판별하였고 약수일 경우 변수 answer에 더해주었다.

### 2021.09.03

- [문자열 내 p와 y의 개수](../master/Programmers/문자열내p와y의개수/index.js)

[toLowerCase](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)메소드를 이용해 문자열을 소문자로 변환하였고 split로 문자열을 잘라 "p"와 "y"의 길이를 각각 구했다. 삼항연산자를 이용해 두 변수가 같을 경우 true, 이외의 경우는 false를 반환하였다.

### 2021.09.04

- [소수 찾기 level 1](../master/Programmers/소수찾기레벨1/index.js)

에라토스테네스의 체를 이용해 풀었다. if문과 for문을 이용해 소수일 경우 배열에 추가, 아닐 경우 false로 설정하였다.

### 2021.09.05

- [자연수 뒤집어 배열로 만들기](../master/Programmers/자연수뒤집어배열로만들기/index.js)

toString을 이용해 문자열로 바꿔주었고 split로 배열을 만들었다. reverse로 배열을 뒤집었고 map을 이용햐 정수형으로 변환 후 반환하였다.

### 2021.09.06

- [2016년](../master/Programmers/2016년/index.js)

2016년의 월마다의 일 수를 month 배열에 넣었고, 2016년의 1월 1일이 금요일이기 때문에 day 배열에 금요일을 제일 앞에 넣었다. a달 전달까지의 일자를 모두 더하고 b-1의 일자까지 더해주어 총 일 수를 구했다. 총 일 수에 7로 나눈 나머지를 구해 day 배열에서 요일을 찾아 반환하였다.

[Date](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)객체를 이용해 풀 수도 있다.

### 2021.09.07

- [문자열 다루기 기본](../master/Programmers/문자열다루기기본/index.js)

length를 이용해 s의 길이를 구했고, == 은 값만 비교하기 때문에 === 대신 ==을 써 s가 숫자로만 구성돼있는지 확인하였다.

### 2021.09.08

- [약수의 개수와 덧셈](../master/Programmers/약수의개수와덧셈/index.js)

제곱근이 정수면 약수의 개수가 홀수인 점을 이용하였다. [Math.sqrt()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)함수는 숫자의 제곱근을 반환한다. 이를 이용해 정수인지 판별하는 메소드 [Number.isInteger()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) 로 정수이면 빼기 아닐 경우 더해주도록 하였다.

### 2021.09.09

- [3진법 뒤집기](../master/Programmers/3진법뒤집기/index.js)

toString으로 3진법으로 변환하여 문자열로 만든 후 split로 분할하였다. [toString](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)은 특정 기수를 기준으로 한 진수 값의 문자열을 환원하기 위한 바꾸어주는 역할을 한다. reverse로 뒤집었고 마지막에 [parseInt](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt)를 이용해 3진법으로 표현한 정수를 나타내었다.
[Javascript 진법 변환](https://medium.com/web-dev-note/javascript-%EC%A7%84%EB%B2%95-%EB%B3%80%ED%99%98-330694083495), [진법](http://tcpschool.com/codingmath/notation)

### 2021.09.10

- [체육복](../master/Programmers/체육복/index.js)

[fill](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)메소드를 이용해 배열의 시작부터 끝 인덱스 이전 까지 1로 채워준 후 배열에 학생마다의 체육복 수를 저장하였다. 2개의 체육복을 가진 학생일 때 앞, 뒤 순서로 빌려주도록 하였다.

### 2021.09.12

- [두 개 뽑아서 더하기](../master/Programmers/두개뽑아서더하기/index.js)

반복문을 돌면서 나온 두 수를 더해 arr 배열에 저장하였다. [Set](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)을 이용해 배열에 있는 중복 값들을 제거하였다. 마지막으로 sort로 오름차순으로 정렬해 반환하였다.

### 2021.10.23

- [모의고사](../master/Programmers/모의고사/index.js)

수포자마다 찍는 방식을 배열에 저장하였다. for문으로 각각의 답안지들과 answers를 비교해 일치할 때마다 correctAnswer가 증가하도록 하였다. [Math.max()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max)로 최대값을 구했고 이후 오름차순 정렬해 answer배열을 반환하였다.

### 2021.10.24

- [없는 숫자 더하기](../master/Programmers/없는숫자더하기/index.js)

[includes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)메서드를 이용해 i가 numbers에 들어있는지 판별 후 들어있다면 answer에 i를 더해 반환하였다.

### 2021.10.25

- [나머지가 1이 되는 수 찾기](../master/Programmers/나머지가1이되는수찾기/index.js)

처음엔 arr 배열에 n % i가 1이 되는 수들을 넣고 마지막에 배열 중 가장 작은 수를 반환하였다.
그러나 for문에서 i가 2부터 시작하기 떄문에 최소값을 구할 필요없이 for문대로 돌다가 나머지가 1이되면 바로 반환하면 된다.

### 2021.10.26

- [행렬의 덧셈](../master/Programmers/행렬의덧셈/index.js)

이중 for문을 이용하였다. 첫번 째 for문은 arr1의 길이만큼 돌아 행을 추가하였고 두번 째 for문은 열을 추가하였다.
행과 열의 크기가 같은 두 행렬에서 배열.length는 행의 개수, 배열[인덱스]는 열의 개수를 뜻한다.

### 2021.10.27

- [정수 제곱근 판별](../master/Programmers/정수제곱근판별/index.js)

제곱근 문제, [Math.sqrt](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)함수를 이용해 제곱근을 반환 후 나머지가 0이라면 x+1의 제곱을 반환하고 0이 아닐 경우 -1을 반환하였다.

### 2021.10.28

- [음양 더하기](../master/Programmers/음양더하기/index.js)

배열의 길이만큼 반복문을 돌면서 signs[i]가 true일 경우 변수 answer에 absolutes[i]를 더하고 false일 경우 -1을 곱해 더하였다.

### 2021.10.29

- [내적](../master/Programmers/내적/index.js)

배열의 길이만큼 반복문을 돌면서 a[i] \* b[i]한 값을 변수 answer에 더한 후 반환하였다.

### 2021.10.30

- [문자열을 정수로 바꾸기](../master/Programmers/문자열을정수로바꾸기/index.js)

[Number](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)를 이용해 숫자로 변환하여 반환하였다.

### 2021.10.31

- [하샤드 수](../master/Programmers/하샤드수/index.js)

x를 문자열로 변경 후 split로 쪼개고 map을 이용해 다시 정수형으로 만들었다. [reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)를 이용해 배열의 합을 구했고 이후 조건에 맞는다면 true 아닐 경우 false를 반환하였다.

### 2021.11.01

- [K번째 수](../master/Programmers/K번째수/index.js)

commands 길이만큼 반복문을 돌면서 slice로 array의 배열을 자르고 [sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)로 정렬하였다. 이후 k번째 수를 answer에 push하여 반환하였다.

### 2021.11.02

- [완주하지 못한 선수](../master/Programmers/완주하지못한선수/index.js)

두 배열을 정렬 후 for문을 돌면서 동일하지 않을 경우 반환하도록 하였다.

### 2021.11.03

- [문자열 내 마음대로 정렬하기](../master/Programmers/문자열내마음대로정렬하기/index.js)

sort를 이용하였다.
a,b < 0 이면 a를 b보다 작은 인덱스로 정렬, a,b === 0 이면 a와 b의 순서를 바꾸지 않음, a,b > 0 이면 b를 a보다 작은 인덱스로 정렬하는 점을 이용하여 풀었다.

### 2021.11.06

- [최대공약수와 최소공배수](../master/Programmers/최대공약수와최소공배수/index.js)

유클리드 호제법을 이용하여 풀었다. 최소공배수는 두 수를 곱한 후 최대공약수로 나누어 구했다.


### 2021.11.08

- [가장 큰 수](../master/Programmers/가장큰수/index.js)

[map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)을 이용해 문자열로 변환하였고 sort를 이용해 수가 큰 순으로 정렬하였다. b+a, a+b를 써 문자열로 수를 비교하였다. 이후 join으로 문자열을 합하여 가장 큰 수를 구했다. 0만 있는 경우 예외처리가 필요해 삼항연산자로 풀어 반환하였다.


### 2021.11.11

- [기능개발](../master/Programmers/기능개발/index.js)

while문과 if문으로 조건을 두고 조건 충족 시 [shift](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)로 하나씩 없애 만들어진 answer을 반환하였다.


### 2021.11.14

- [타겟 넘버](../master/Programmers/타겟넘버/index.js)

깊이/너비 우선 탐색 문제, +인 경우를 모두 탐색 후 -인 경우를 탐색하였다. 재귀함수를 사용할 때에는 모든 함수가 끝난 후 실행이 되어야한다.


### 2021.11.22

- [프린터](../master/Programmers/프린터/index.js)

**Math.max.apply(null, arr)**

Math.max()를 이용해 매개변수들의 최대값을 구할 수 있다. [apply()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)메소드는 this와 배열로 제공되는 arguments로 함수를 호출한다. apply의 두번째 파라미터에는 배열만 들어갈 수 있다.


shift로 맨앞의 요소를 빼낸 후 빼낸 요소가 max와 같다면 cnt를 1 증가시키고 이 때 location이 0이 되면 cnt를 반환하였다. max와 다를 경우 배열 맨 끝에 꺼낸 요소를 추가하였다. while문을 돌면서 location 값을 1씩 감소시켰다. 이후 만약 location이 -1이 된다면 다시 배열의 끝으로 보냈다.


### 2021.11.29

- [소수 찾기 level 2](../master/Programmers/소수찾기레벨2/index.js)

[includes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)메소드는 배열이 해당 요소를 포함하는지 판별한다.

너무 어려운 문제였다 ... 26번째 줄은 아직 잘 모르겠다. 복습 많이 해야겠다.
[순열과 조합](https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-21df4b536349)



### 2021.11.30

- [시저 암호](../master/Programmers/시저암호/index.js)

아스키 코드값을 이용하였다. map을 이용하여 v값이 공백이라면 공백을 반환하였고 v를 대문자로 변화 시킨 값이 90을 넘는다면 Z가 넘기 때문에 다시 A부터 돌아가게 하였다. 26을 뺀 이유는 알파벳 개수가 26개이기 때문에 A로 돌아가기위해 26을 빼주었다.


[toUpperCase()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)메소드는 문자열을 대문자로 변환해 반환한다.
[charCodeAt()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)메소드는 문자의 아스키코드 값을 반환해주고 [String.fromCharCode()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)메소드는 아스키코드 숫자의 문자를 반환한다.

[518일](https://kwiki.devserum.com/ko/articles/tech-articles/2021-05-31-518-consecutive-days-algorithm-challenge?fbclid=IwAR1zkm33drSs3udsogwwOKHgMDkK0T_PVOe-SB2V6r5O0Vv0C63UOtYtj6c)



- [이상한 문자 만들기](../master/Programmers/이상한문자만들기/index.js)

[toLowerCase()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)메소드는 문자열을 소문자로 변환, toUpperCase()는 대문자로 변환한다. 이를 이용하여 짝수일 경우 대문자 아닐 경우 소문자로 변환하여 빈 문자열에 더해 반환하였다.


