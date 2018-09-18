function steps(num) {
  let result = num;
  let stepCnt = 0;

  while (stepCnt <= 10 && result !== 1) {
    console.log(`result=${result}`);
    let temp = result / 2;
    if (temp === 1) {
      result = temp;
    } else {
      result = temp % 2 !== 0 ? (3 * result) + 1 : temp;
    }
    stepCnt = stepCnt + 1;
    console.log(`stepCnt=${stepCnt}`);
  }

  return stepCnt;
}

export { steps };
