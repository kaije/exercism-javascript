class WordProblem {
  constructor(question) {
    this.question = question;
  }
  
  answer() {
    return 2;
  }
}

class ArgumentError {
  constructor() {}
}

export {WordProblem, ArgumentError};