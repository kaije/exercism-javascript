export default class Binary {
  constructor(binaryString) {
    this.binaryString = binaryString;
    this.inputValid = /^[01]+$/.test(this.binaryString);
  }

  toDecimal() {
    return this.inputValid ? this.convert() : 0;
  }

  convert() {
    let decimal = 0;
    let exponent = 0;
    
    for (let i = this.binaryString.length - 1; i >= 0; i--) {
      decimal = decimal + (this.binaryString.charAt(i) * 2**exponent);
      exponent++;
    }
    return decimal;
  }
}
