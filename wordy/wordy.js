class WordProblem {
  constructor(question) {
    this.question = question;
    this.operators = {
      'plus': '+',
      'minus': '-'      
    }
  }
  
  answer() {
    let expression = this.question
      .replace(/what is/i, '')
      .replace(/\?/, '')
      .replace(/plus/gi, '+')
      .replace(/minus/gi, '-')
      .replace(/multiplied by/gi, '*')
      .replace(/divided by/gi, '/');
      
    return eval(expression);
  }
}

class ArgumentError {
  constructor() {}
}

export {WordProblem, ArgumentError};