function solve(puzzle) {
  let letters = [...new Set(puzzle.match(/[A-Z]/g))];
  let temp = letters.map( letter => [letter, null]);
  let mappings = {};

  temp.forEach( ([letter, value]) => mappings[letter] = value );

  console.log(mappings);

  mappings = {
    I: 1,
    B: 9,
    L: 0
  };

  return mappings;
}

export { solve }
