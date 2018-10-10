export default function score(word) {

  /*   const letterScores = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  }; */

  return word
    .split("")
    .map(letter => getLetterScore(letter))
    .reduce((sum, score) => sum + score, 0);
}

function getLetterScore(letter) {
/*   const letterScores = {
    A: 1,
    E: 1,
    F: 4,
    O: 1,
    R: 1,
    S: 1,
    T: 1,
    Z: 10
  }; */

    const letterScores = new Map([
    [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1],
    [['D', 'G'],2],
    [['B', 'C', 'M', 'P'],3],
    [['F', 'H', 'V', 'W', 'Y'],4],
    [['K'],5],
    [['J', 'X'],8],
    [['Q', 'Z'], 1]
  ]);

  return letterScores[letter.toUpperCase()]
}