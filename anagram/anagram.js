export default class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(candidates) {
    return candidates.filter( candidate => this.isAnagram(candidate));
  }

  isAnagram(candidate) {
    const wordLetters = this.sortedLetters(this.word);
    const candidateLetters = this.sortedLetters(candidate);

    return wordLetters.join('') === candidateLetters.join('');
  }

  sortedLetters(word) {
    return Array.from(word.toLowerCase())
      .sort();
  }
}