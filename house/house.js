const elements = {
  1: { noun: "the house", postmodifier: "that Jack built." },
  2: { noun: "the malt", postmodifier: "that lay in" },
  3: { noun: "the rat", postmodifier: "that ate" },
  4: { noun: "the cat", postmodifier: "that killed" },
  5: { noun: "the dog", postmodifier: "that worried" },
  6: {
    noun: "the cow",
    description: "with the crumpled horn",
    postmodifier: "that tossed"
  },
  7: {
    noun: "the maiden",
    description: "all forlorn",
    postmodifier: "that milked"
  },
  8: {
    noun: "the man",
    description: "all tattered and torn",
    postmodifier: "that kissed"
  },
  9: {
    noun: "the priest",
    description: "all shaven and shorn",
    postmodifier: "that married"
  },
  10: {
    noun: "the rooster",
    description: "that crowed in the morn",
    postmodifier: "that woke"
  },
  11: {
    noun: "the farmer",
    description: "sowing his corn",
    postmodifier: "that kept"
  },
  12: {
    noun: "the horse and the hound and the horn",
    postmodifier: "that belonged to"
  }
};

class House {
  static verse(startVerse) {
    let lyrics = [];
    let key = startVerse;
    let line = "This is";
    while (key > 1) {
      line = `${line} ${elements[key].noun}`;
      line = elements[key].description
        ? `${line} ${elements[key].description}`
        : line;
      lyrics.push(line);
      line = elements[key].postmodifier;
      key--;
    }
    lyrics.push(`${line} ${elements[key].noun} ${elements[key].postmodifier}`);
    return lyrics;
  }
}

export { House };
