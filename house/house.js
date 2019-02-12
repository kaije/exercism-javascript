const nounPhrases = {
  1: { determiner: "the", noun: "house", postmodifier: "that Jack built" },
  2: { determiner: "the", noun: "malt", postmodifier: "that lay in" },
  3: { determiner: "the", noun: "rat", postmodifier: "that ate" },
  4: { determiner: "the", noun: "cat", postmodifier: "that killed" },
  5: { determiner: "the", noun: "dog", postmodifier: "that worried" },
  6: {
    determiner: "the",
    noun: "cow",
    description: "with the crumpled horn",
    postmodifier: "that tossed"
  },
  7: {
    determiner: "the",
    noun: "maiden",
    description: "all forlorn",
    postmodifier: "that milked"
  },
  8: {
    determiner: "the",
    noun: "man",
    description: "all tattered and torn",
    postmodifier: "that kissed"
  },
  9: {
    determiner: "the",
    noun: "priest",
    description: "all shaven and shorn",
    postmodifier: "that married"
  },
  10: {
    determiner: "the",
    noun: "rooster",
    description: "that crowed in the morn",
    postmodifier: "that woke"
  },
  11: {
    determiner: "the",
    noun: "farmer",
    description: "sowing his corn",
    postmodifier: "that kept"
  },
  12: {
    determiner: "the",
    noun: "horse and the hound and the horn",
    postmodifier: "that belonged to"
  }
};

class House {
  static verse(startVerse) {
    let lyrics = [];
    let key = startVerse;
    let line = "This is";
    while (key > 1) {
      let phrase = nounPhrases[key];
      line = `${line} ${phrase.determiner} ${phrase.noun}`;
      line = phrase.description ? `${line} ${phrase.description}` : line;
      lyrics.push(line);
      line = phrase.postmodifier;
      key--;
    }
    lyrics.push(
      `${line} ${nounPhrases[key].determiner} ${nounPhrases[key].noun} ${
        nounPhrases[key].postmodifier
      }.`
    );
    return lyrics;
  }
  static verses(startVerse, endVerse) {
    let lyrics = [];
    let key = startVerse;
    while (key <= endVerse) {
      let verseLyrics = this.verse(key);
      lyrics.push(...verseLyrics);
      key < endVerse ? lyrics.push("") : null;
      key++;
    }
    return lyrics;
  }
}

export { House };
