/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {    
    if (!message.trim()) {
      return 'Fine. Be that way!';
    } else if (/[a-zA-Z]/.test(message) && message === message.toUpperCase() && /\?$/.test(message)) {
      return 'Calm down, I know what I\'m doing!';    
    } else if (/[a-zA-Z]/.test(message) && message === message.toUpperCase()) {
      return 'Whoa, chill out!';
    } else if (/\?$/.test(message)) {
      return 'Sure.';
    } else {
      return 'Whatever.';
    }
  }
}

export default Bob;

