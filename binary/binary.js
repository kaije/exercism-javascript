class Binary {
  constructor(binaryString) {
    this.binaryString = binaryString;
  }

  toDecimal() {
    return Number(this.binaryString);
  }
}

export default Binary;
