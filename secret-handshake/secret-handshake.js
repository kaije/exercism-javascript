export default class SecretHandshake {
  constructor(hexNumber) {
    this.binaryNumber = this.hexToBinary(hexNumber);
    if (isNaN(this.binaryNumber)) { 
      throw new Error('Handshake must be a number');
    }
    this.handshakeEvents = {
      1: 'wink',
      10: 'double blink',
      100: 'close your eyes',
      1000: 'jump'
    }
  }

  hexToBinary(hexNumber) {
    return parseInt(hexNumber, 16).toString(2);
  }

  commands() {
    const keys = Object.keys(this.handshakeEvents);
    return keys.includes(this.binaryNumber) 
      ? [this.handshakeEvents[this.binaryNumber]]
      : this.parseCommands();
  }

  parseCommands() {
    let remainder = this.binaryNumber;
    let commandArray = []

    // if it's divisible by 16, set reverse flag
    let reverse = parseInt(this.binaryNumber, 2) > 16;   

    if (Number.parseInt(remainder, 2) >= 16 ) {
      reverse = true;
      remainder = (parseInt(remainder, 2) - 16).toString(2);
    }

    if (Number.parseInt(remainder, 2) >= 8 ) {
      commandArray.unshift(this.handshakeEvents[1000]);      
      remainder = (parseInt(remainder, 2) - 8).toString(2);
    }

    if (Number.parseInt(remainder, 2) >= 4 ) {
      commandArray.unshift(this.handshakeEvents[100]);      
      remainder = (parseInt(remainder, 2) - 4).toString(2);
    }    

    if (Number.parseInt(remainder, 2) >= 2 ) {
      commandArray.unshift(this.handshakeEvents[10]);      
      remainder = (parseInt(remainder, 2) - 2).toString(2);
    }   

    if (Number.parseInt(remainder, 2) >= 1 ) {
      commandArray.unshift(this.handshakeEvents[1]);      
      remainder = (parseInt(remainder, 2) - 1).toString(2);
    }

    return reverse ? commandArray.reverse() : commandArray ;
  }
}
