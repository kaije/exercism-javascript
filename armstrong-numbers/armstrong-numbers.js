function validate(input) {
  const digits = input
    .toString()
    .split("")
    .map(digit => parseInt(digit));

  let raised = digits.map(digit => digit ** digits.length);

  let finalSum = raised.reduce((sum, current) => sum + current);
  
  return input === finalSum;
}

export { validate };
