class NucleotideCounts {
  constructor() {}
  static parse(strand) {
    const nucleotides = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    };
    return Object.values(nucleotides).join(" ");
  }
}

export { NucleotideCounts };
