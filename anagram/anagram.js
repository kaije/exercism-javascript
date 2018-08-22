export default class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(candidates) {
    return candidates.filter( candidate => this.isAnagram(candidate));
  }

  isAnagram(candidate) {
    if (this.word.toUpperCase() === candidate.toUpperCase()) {
      return false;
    } else {
      return this.sortLetters(this.word) === this.sortLetters(candidate);
    }
  }

  sortLetters(word) {
    return Array.from(word.toLowerCase())
      .sort()
      .join('');
  }
}