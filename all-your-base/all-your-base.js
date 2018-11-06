export default class Converter {
  constructor() {}

  convert(digits, base, newBase) {
    let decimal = digits
      .reverse()
      .map((digit, index) => digit * base ** index)
      .reduce((sum, digit) => sum + digit);

    let baseArray = [];
    let curr;
    let exponent = 0;
    do {
      curr = newBase ** exponent;
      if (decimal >= curr) {
        baseArray.push(curr);
      }
      exponent++;
    } while (decimal >= curr);

    baseArray.reverse();

    let newVal;
    let remainder = decimal;
    let result = baseArray.map(val => {
      newVal = Math.floor(remainder / val);
      remainder = remainder % val;
      return newVal;
    });

    return result;
  }
}
