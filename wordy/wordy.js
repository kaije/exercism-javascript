export class ArgumentError extends Error {
}

export class WordProblem {
  constructor(question) {
    this.conversions = {
      plus: '+',
      minus: '-',
      'multiplied by': '*',
      'divided by': '/'
    };

    this.operatorRegex = new RegExp(Object.keys(this.conversions)
      .join('|'), 'gi');

    this.problem = question;
  }

  answer() {
    const tokens = WordProblem.parseTokens(this.problem);
    return this.solve(tokens);
  }

  static parseTokens(str) {
    return str.match(/plus|minus|multiplied by|divided by|-?[0-9]+/gi);
  }

  solve(tokens) {
    if (!tokens || tokens.length < 3) {
      throw new ArgumentError();
    }

    let answer;
    let left = tokens[0];

    if (!WordProblem.isOperand(left)) {
      throw new ArgumentError();
    }

    for (let i = 1; i < tokens.length; i += 2) {
      const [operator, right] = tokens.slice(i, i + 2);
      if (!this.isOperator(operator) || !WordProblem.isOperand(right)) {
        throw new ArgumentError();
      }
      answer = eval(this.convertToExpression(`${left} ${operator} ${right}`));
      left = answer;
    }

    return answer;
  }

  isOperator(token) {
    return Object.keys(this.conversions).includes(token);
  }

  static isOperand(token) {
    return /-?[0-9]+/.test(token);
  }

  convertToExpression(str) {
    return str
      .replace(this.operatorRegex, match => this.conversions[match]);
  }
}
