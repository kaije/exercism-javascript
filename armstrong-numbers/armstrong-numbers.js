function validate(input) {
  const digits = input
    .toString()
    .split("")
    .map(digit => parseInt(digit));
  
  const sum = digits.reduce(
    (sum, currentVal) => sum + currentVal ** digits.length
  );

  return input === sum;
}

export { validate };
