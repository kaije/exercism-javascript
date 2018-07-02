export default class SecretHandshake {
  constructor(number) {
    this.number = number;
    if (isNaN(this.number)) { 
      throw new Error('Handshake must be a number');
    }
  }

  commands() {
    const handshakeEvents = [
      [1 << 0, 'wink'],
      [1 << 1, 'double blink'],
      [1 << 2, 'close your eyes'],
      [1 << 3, 'jump']
    ];
    const commandArray = [];

    for (const [mask, str] of handshakeEvents) {
      // console.log(`number ${this.number.toString(2)} mask ${mask.toString(2)} str ${str}`);
      // console.log(`this.number & mask = ${(this.number.toString(2) & mask).toString(2)}`);
      if ((this.number & mask) !== 0) {
        commandArray.push(str);
      }
    }

    if ((this.number & 10000) !== 0) {
      commandArray.reverse();
    }

    return commandArray;
  }
}
