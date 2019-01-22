export default class Allergies {
  constructor(score) {
    this.score = score;
  }
  list() {
    if (this.score === 0) {
      return [];
    }
  }
}
