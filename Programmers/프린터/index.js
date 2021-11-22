const solution = (priorities, location) => {
  let max;
  let cnt = 0;

  while (true) {
    max = Math.max.apply(null, priorities);
    let n = priorities.shift();

    if (n === max) {
      cnt++;
      if (location === 0) {
        return cnt;
      }
    } else {
      priorities.push(n);
    }
    location--;
    if (location == -1) {
      location = priorities.length - 1;
    }
  }
};
