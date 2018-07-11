class WordProblem {
  constructor(question) {
    this.question = question;
  }

  answer() {
    const expression = this.convertToExpression(this.question);
    return eval(expression);
  }

  convertToExpression(str) {
    const conversions = {      
      'plus': '+',
      'minus': '-',
      'multiplied by': '*',
      'divided by': '/'
    };

    const regex = new RegExp( Object.keys(conversions)
      .join('|'), 'gi' );

    return str
      .replace(regex, match => conversions[match])
      .replace(/what is/i, '')
      .replace(/\?/, '');      
  }
}

class ArgumentError {
  constructor() {}
}

export { WordProblem, ArgumentError };
