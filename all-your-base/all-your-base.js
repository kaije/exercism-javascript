export default class Converter {
  constructor() {}

  convert(digits, inputBase, outputBase) {

    if (inputBase === 1 || inputBase === 0 || inputBase < 0 || !inputBase || !Number.isInteger(inputBase)) {
      throw new Error('Wrong input base');    
    }

    if (outputBase === 1 || outputBase ===0 || outputBase < 0 || !outputBase || !Number.isInteger(outputBase)) {
      throw new Error('Wrong output base');    
    }
    
    if (digits.filter( digit => digit >= inputBase).length > 0) {
      throw new Error('Input has wrong format');
    }

    if (digits.length === 0) {
      throw new Error('Input has wrong format');
    }

    if (digits.length === 1 && digits[0] === 0) {
      return [0];
    }

    if (digits.length > 1 && digits.filter( digit => digit !== 0).length === 0) {
      throw new Error('Input has wrong format');    
    }

    if (digits.length > 1 && digits[0] === 0) {
      throw new Error('Input has wrong format');    
    }    

    if (digits.filter( digit => digit < 0).length > 0) {
      throw new Error('Input has wrong format');    
    }

    let decimal = digits
      .reverse()
      .map((digit, index) => digit * inputBase ** index)
      .reduce((sum, digit) => sum + digit);

    let baseArray = [];
    let curr;
    let exponent = 0;
    do {
      curr = outputBase ** exponent;
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
