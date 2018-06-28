export default class SecretHandshake {
  constructor(hexNumber) {
    this.binaryNumber = this.hexToBinary(hexNumber);
    this.handshakeEvents = {
      1: 'wink',
      10: 'double blink',
      100: 'close your eyes',
      1000: 'jump'
    }
  }

  hexToBinary(hexNumber) {
    return Number.parseInt(hexNumber, 16).toString(2);
  }

  commands() {
    return [this.handshakeEvents[this.binaryNumber]];
  }
}
