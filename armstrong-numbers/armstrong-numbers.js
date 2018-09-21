function validate(input) {
  const digits = input
    .toString()
    .split("")
    .map(digit => parseInt(digit));
  
  const finalSum = digits.reduce(
    (sum, currentVal) => sum + currentVal ** digits.length
  );
  console.log(digits);
  digits.forEach(element => {
    console.log(`${element} ** ${digits.length} = ${element ** digits.length}`);
  });
  console.log(finalSum);
  return input === finalSum;
}

export { validate };
