class HighScores {
  constructor(input) {
    this.scores = input;
    this.latest = this.scores.slice(-1)[0];
    this.highest = Math.max(...this.scores);
    this.top = this.scores
      .map(value => value)
      .sort()
      .reverse()
      .slice(0, 3);
  }
}

export { HighScores };
