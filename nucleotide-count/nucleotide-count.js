class NucleotideCounts {
  constructor() {}
  static parse(strand) {
    const nucleotides = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    };
    strand.split('').forEach(nucleotide => {
      nucleotides[nucleotide]++;
    });
    return Object.values(nucleotides).join(" ");
  }
}

export { NucleotideCounts };
