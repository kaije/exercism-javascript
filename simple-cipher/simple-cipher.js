class Cipher {
  constructor(key = 'ddddddddddddddddd') {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this.key = key;
    this.keyArray = key.split('');
  }

  encode(text) { 
    let newKey = this.getKeyInstance(text);
    console.log(newKey);
    let newKeyArray = newKey.split('');
    console.log(newKeyArray);
    /* for each letter in the text, add the index of the corresponding letter in the key to the
    index of the original letter, and return the letter at the resulting index */
    console.log(this.alphabet.lastIndexOf());
    return text
      .split('')
      .map((letter, index) => this.alphabet[(this.alphabet.indexOf(letter) + this.alphabet.indexOf(newKeyArray[index])) % (this.alphabet.length)])
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
        decodeIndex = decodeIndex < 0 ? ((this.alphabet.length) + decodeIndex) : decodeIndex;
        return this.alphabet[decodeIndex];
      })
      .join('');
  }

  getKeyInstance(text) {
    /* if the text is longer than the key, generate a new key by repeating the key enough times to make it longer than the text */
    return ((text.length > this.key.length) ? this.key.repeat(Math.ceil(text.length/this.key.length)) : this.key);
  }
}

export default Cipher;