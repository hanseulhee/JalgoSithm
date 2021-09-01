const solution = (n) => {
  let count = 0;
  let tempN = n;

  while (tempN !== 1) {
    tempN = tempN % 2 === 0 ? tempN / 2 : tempN * 3 + 1;
    count += 1 ;

    if (count > 500) {
      count = -1;
      break;
    }
  }

  return count;
};
