const elements = {
  1: { noun: "the house", postmodifier: "that Jack built." },
  2: { noun: "the malt", postmodifier: "that lay in" },
  3: { noun: "the rat", postmodifier: "that ate" },
  4: { noun: "the cat", postmodifier: "that killed" },
  5: { noun: "the dog", postmodifier: "that worried" }
};

class House {
  static verse(startVerse) {
    let lyrics = [];
    let key = startVerse;
    let line = "This is";
    while (key > 1) {
      line = `${line} ${elements[key].noun}`;
      lyrics.push(line);
      line = elements[key].postmodifier;
      key--;
    }
    lyrics.push(`${line} ${elements[key].noun} ${elements[key].postmodifier}`);
    return lyrics;
  }
}

export { House };
