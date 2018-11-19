function classify(num) {
  if (num <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  /*   let factors = Array.from(Array(num).keys()).filter(
    candidate => candidate > 0 && num % candidate === 0
  ); */

  let factors = [];
  let candidate = 1;
  while (candidate < num) {
    if (num % candidate === 0) {
      factors.push(candidate);
    }
    candidate++;
  }

  let sum =
    factors.length > 0 ? factors.reduce((sum, current) => sum + current) : 0;

  return sum === num ? "perfect" : sum > num ? "abundant" : "deficient";
}

export { classify };
