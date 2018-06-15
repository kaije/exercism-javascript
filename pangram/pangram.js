class Pangram {
  
  constructor(testString) {
    this.testString = testString? testString.toLowerCase() : testString;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  }

  isPangram() {
    let letterTally = new Map(this.alphabet.map( letter => [letter, 0]));
    if (!this.testString) {
      return false;
    } else {
      let stringArr = this.testString.split('');
      stringArr.forEach(element => {
        this.alphabet.includes(element) ? letterTally.set(element, letterTally.get(element) + 1) : null;
      });
      let verdict = true;
      letterTally.forEach((count, letter, map) => {
        if (count === 0) {
          verdict = false;
        }
      });
      return verdict;
    }
  }
}

export default Pangram;