function validate(input) {
  const digits = input
    .toString()
    .split("")
    .map(digit => parseInt(digit));

  const finalSum = digits
    .map(digit => digit ** digits.length)
    .reduce((sum, current) => sum + current);

  return input === finalSum;
}

export { validate };
