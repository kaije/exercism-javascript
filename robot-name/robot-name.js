let usedNames = new Set();

export default class Robot {
  constructor() {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.generatedNamesCnt = 0;
    this.setName();
  }

  get name() {
    return this._name;
  }

  reset() {
    this.setName();  
  }

  setName() {
    let newName = this.generateName();
    
    if (usedNames.has(newName)) {
      this.setName();
    } else {
      this._name = newName;
      usedNames.add(newName);
    }
  }

  /* Names must be in the format of two uppercase letters followed by 
  three digits, such as RX837 or BC811 */
  generateName() {
    let letters;
    let digits;
    
    this.generatedNamesCnt++;
    letters = this.alphabet[this.getRandomIntInclusive(0, 25)] + this.alphabet[this.getRandomIntInclusive(0, 25)];
    digits = this.getRandomIntInclusive(0,999);
    digits = digits.toString().padStart(3, '0');
    return `${letters}${digits.toString()}`;
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}