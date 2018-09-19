function steps(num) {
  let n = num;
  let stepCnt = 0;

  if (n <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  while (n !== 1) {

    // if n is even, divide n by 2
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      // if n is odd, multiply n by 3 and add 1
      n = (3 * n) + 1;
    }

    stepCnt++;
  }

  return stepCnt;
}

export { steps };
