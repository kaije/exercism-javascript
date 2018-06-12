class Cipher {
  constructor(key = 'ddddddddddddddddd') {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this.key = key;
    this.keyArray = key.split('');
  }

  encode(text) {
    /* for each letter in the text, add the index of the corresponding letter in the key to the
    index of the original letter, and return the letter at the resulting index */
    return text
      .split('')
      .map((letter, index) => this.alphabet[(this.alphabet.indexOf(letter) + this.alphabet.indexOf(this.keyArray[index])) % 26])
      .join('');
  }

  decode(text) {
    /* for each letter in the text, subtract the index of the corresponding letter in the key
    from the index of the encoded letter, and return the letter at the resulting index */
    return text
      .split('')
      .map((letter, index) => {
        let decodeIndex = (this.alphabet.indexOf(letter) - this.alphabet.indexOf(this.keyArray[index]));
        // if the index is negative, wrap around (e.g. -1 becomes 25)
        decodeIndex = decodeIndex < 0 ? (26 + decodeIndex) : decodeIndex;
        return this.alphabet[decodeIndex];
      })
      .join('');
  }
}

export default Cipher;