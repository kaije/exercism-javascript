class Pangram {
  
  constructor(testString) {
    this.testString = testString;
  }

  isPangram() {
    switch (this.testString) {
      case '':
        return false;
    }
  }
}

export default Pangram;