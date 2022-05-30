# 코딩 테스트 준비

2022.05.18

[수박수박수박수박수박수?](%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98.js)

```javascript
str.substring(start, end);
```

substring은 start부터 end의 전까지 잘라서 반환한다.

참고 - [문자열 자르기](https://codechacha.com/ko/javascript-how-to-substring/)

2022.05.22

[문자열내마음대로정렬하기](%EB%AC%B8%EC%9E%90%EC%97%B4%EB%82%B4%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0.js)

```javascript
strings.sort((a, b) => {});
```

위의 코드에서 a, b는 next, prev와 같다. 즉, sort((next, prev)=>{});이다.

반환 값이 0보다 크다면 a 먼저, 반환 값이 0이라면 그대로, 반환 값이 0보다 작다면 b가 먼저 온다.

참고 - [Array.prototype.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) [Javascript Sort함수](https://velog.io/@jakeseo_me/Javascript-Sort%ED%95%A8%EC%88%98%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9E%A1%EC%A7%80%EC%8B%9D) [String.prototype.localeCompare()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

[문자열내림차순으로배치하기](%EB%AC%B8%EC%9E%90%EC%97%B4%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0.js)

sort 함수에서 reverse를 사용하면 내림차순으로 정렬한다.

2022.05.31

[K번째수](%EB%AC%B8%EC%9E%90%EC%97%B4%EB%82%B4%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0.js)

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