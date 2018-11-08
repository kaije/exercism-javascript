export default class Converter {
  constructor() {}

  convert(digits, inputBase, outputBase) {
    this.validate(digits, inputBase, outputBase);

    if (digits.join('') === '0') {
      return [0];
    }

    let decimal = digits
      .reverse()
      .map((digit, index) => digit * inputBase ** index)
      .reduce((sum, digit) => sum + digit);

    let outputArray = [];
    let current;
    let exponent = 0;
    do {
      current = outputBase ** exponent;
      if (decimal >= current) {
        outputArray.push(current);
      }
      exponent++;
    } while (decimal >= current);

    outputArray.reverse();

    let newVal;
    let remainder = decimal;
    let result = outputArray.map(val => {
      newVal = Math.floor(remainder / val);
      remainder = remainder % val;
      return newVal;
    });

    return result;
  }

  validate(digits, inputBase, outputBase) {
    this.validateInputBase(inputBase);
    this.validateOutputBase(outputBase);
    this.validateInput(digits, inputBase);
  }

  validateInputBase(inputBase) {
    if (
      inputBase === 1 ||
      inputBase === 0 ||
      inputBase < 0 ||
      !inputBase ||
      !Number.isInteger(inputBase)
    ) {
      throw new Error("Wrong input base");
    }
  }

  validateOutputBase(outputBase) {
    if (
      outputBase === 1 ||
      outputBase === 0 ||
      outputBase < 0 ||
      !outputBase ||
      !Number.isInteger(outputBase)
    ) {
      throw new Error("Wrong output base");
    }
  }

  validateInput(digits, inputBase) {
    if (
      digits.filter(digit => digit >= inputBase).length > 0 ||
      digits.length === 0 ||
      (digits.length > 1 && digits.filter(digit => digit !== 0).length === 0) ||
      (digits.length > 1 && digits[0] === 0) ||
      digits.filter(digit => digit < 0).length > 0
    ) {
      throw new Error("Input has wrong format");
    }
  }
}
