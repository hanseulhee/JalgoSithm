function solution(numbers) {
  let answer = 0;
  let primeNumbers = [];
  const numbersArr = numbers.split("");

  function determinePrime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) count++;
      if (count >= 3) break;
    }
    if (count === 2 && !primeNumbers.includes(num)) {
      primeNumbers.push(num);
    }
  }

  function mergeNumbers(arr, str) {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr];
        temp.splice(i, 1);
        mergeNumbers(temp, str + arr[i]);
      }
    }

    if (str.length > 0) determinePrime(+str);
  }

  mergeNumbers(numbersArr, "");
  answer = primeNumbers.length;
  return answer;
}
