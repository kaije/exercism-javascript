const elements = {
  1: { noun: "the house that Jack built." },
  2: { noun: "the malt", postmodifer: "that lay in" }
};

class House {
  static verse(startVerse) {
    let lyrics = [];
    let key = startVerse;
    while (key >= 1) {
      lyrics.push(
        key === startVerse
          ? `This is ${elements[key].noun}`
          : elements[key].noun
      );
      key--;
    }
    return lyrics;
  }
}

export { House };
