export default class Converter {
  constructor() {}

  convert(digits, base, newBase) {
    let decimal = digits
      .reverse()
      .map((digit, index) => digit * base ** index)
      .reduce((sum, digit) => sum + digit);

    return newBase === 10 ? [decimal] : [1];
  }
}
