class Bob {
  hey(message) {    
    if (!message.trim()) {
      return 'Fine. Be that way!';
    } else if (this.atLeastOneLetter(message) && this.isAllCaps(message) && /\?$/.test(message)) {
      return 'Calm down, I know what I\'m doing!';    
    } else if (this.atLeastOneLetter(message) && this.isAllCaps(message)) {
      return 'Whoa, chill out!';
    } else if (/\?$/.test(message)) {
      return 'Sure.';
    } else {
      return 'Whatever.';
    }
  }

  atLeastOneLetter(message) {
    return /[a-zA-Z]/.test(message);
  }

  isAllCaps(message) {
    return message === message.toUpperCase();
  }
}

export default Bob;
