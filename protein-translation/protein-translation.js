export default function translate(rnaSequence) {
  const translations = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  }

  const aminoAcids = {
    Methionine: ['AUG'],
    Phenylalanine: ['UUU','UUC'],
    Leucine: ['UUA','UUG'],
    Serine: ['UCU','UCC','UCA','UCG'],
    Tyrosine: ['UAU','UAC'],
    Cysteine: ['UGU','UGC'],
    Tryptophan: ['UGG'],
    STOP: ['UAA','UAG','UGA']
  }

  let protein = [];

  let codons = rnaSequence ? rnaSequence.match(/.{1,3}/g) : [];

  //codons.forEach( codon => protein.push(translations[codon]) );
  for (let i=0; i < codons.length; i++) {
    if (aminoAcids.STOP.includes(codons[i])) {
      break;
    }
    if (!Object.keys(translations).includes(codons[i])) {
      throw new Error('Invalid codon');
    }
    protein.push(translations[codons[i]]);
  }

  return protein;
}