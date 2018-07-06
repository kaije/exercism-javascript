let usedNames = new Set();

export default class Robot {
  constructor() {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this._name = this.generateName();
  }

  get name() {
    return this._name;
  }

  reset() {
    this.setName();
  }

  setName() {
    this._name = this.generateName();
  }

  /* Names must be in the format of two uppercase letters followed by 
  three digits, such as RX837 or BC811 */
  generateName() {
    let letters;
    let digits;
    let newName = 'none';
    
    letters = this.alphabet[this.getRandomIntInclusive(0,25)] + this.alphabet[this.getRandomIntInclusive(0,25)];
    digits = this.getRandomIntInclusive(0,999);
    digits = digits.toString().padStart(3, '0');
    newName = `${letters}${digits.toString()}`;

    if (usedNames.has(newName)) {
      this.generateName();
    } else {
      usedNames.add(newName);
      return newName;
    }
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

}