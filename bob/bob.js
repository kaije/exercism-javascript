class Bob {
  hey(message) {    
    if (!message.trim()) {
      return 'Fine. Be that way!';
    } else if (this.atLeastOneLetter(message) && message === message.toUpperCase() && /\?$/.test(message)) {
      return 'Calm down, I know what I\'m doing!';    
    } else if (this.atLeastOneLetter(message) && message === message.toUpperCase()) {
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

}

export default Bob;
