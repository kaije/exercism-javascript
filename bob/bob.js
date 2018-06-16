class Bob {
  hey(message) {    
    if (!message.trim()) {
      return 'Fine. Be that way!';
    } else if (this.hasAtLeastOneLetter(message) && this.isAllCaps(message) && this.isAQuestion(message)) {
      return 'Calm down, I know what I\'m doing!';    
    } else if (this.hasAtLeastOneLetter(message) && this.isAllCaps(message)) {
      return 'Whoa, chill out!';
    } else if (this.isAQuestion(message)) {
      return 'Sure.';
    } else {
      return 'Whatever.';
    }
  }

  hasAtLeastOneLetter(message) {
    return /[a-zA-Z]/.test(message);
  }

  isAllCaps(message) {
    return message === message.toUpperCase();
  }

  isAQuestion(message) {
    return /\?$/.test(message);
  }
}

export default Bob;
