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
    return hexNumber === 0x01 ? 1 : 0;
  }

  commands() {
    return [this.handshakeEvents[this.binaryNumber]];
  }
}
