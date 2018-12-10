const vowels = ['a','e','i','o','u'];

let translator = {
  translate: (word) => {
    let firstLetter = word.charAt(0);
    if (vowels.includes(firstLetter)) {
      return `${word}ay`;
    };
  }
}

export default translator;
