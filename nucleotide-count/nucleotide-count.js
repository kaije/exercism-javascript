class NucleotideCounts {
  constructor() {}
  static parse(strand) {
    const nucleotides = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    };
    strand.split("").forEach(nucleotide => {
      if (nucleotides[nucleotide] === undefined) {
        throw new Error("Invalid nucleotide in strand");
      } else {
        nucleotides[nucleotide]++;
      }
    });
    return Object.values(nucleotides).join(" ");
  }
}

export { NucleotideCounts };
