export default class Diamond {
  constructor() {}

  makeDiamond(letter) {
    if (letter === 'A'){
      return `${letter}\n`;
    };

    let letters = ['A','B','C','D','E','F'];
    
    let rows = [];
    let index = letters.indexOf(letter);
    let outerSpacesCnt = 0;
    let innerSpacesCnt = index * 2 - 1;
    
    let row = '';
    let outerSpaces = '';
    let innerSpaces = '';

    while (index > 0) {
      // add a row for the target letter
      outerSpaces = ' '.repeat(outerSpacesCnt);
      innerSpaces = ' '.repeat(innerSpacesCnt);
      row = `${outerSpaces}${letters[index]}${innerSpaces}${letters[index]}${outerSpaces}`;
      console.log(row);
      if (rows.length > 0) {
        rows.unshift(row);
      }
      rows.push(row);
      outerSpacesCnt++;
      innerSpacesCnt = innerSpacesCnt > 2 ? innerSpacesCnt - 2 : 0;
      index--;
    }

    // add first and last rows (A)
    outerSpaces = ' '.repeat(outerSpacesCnt);
    row = `${outerSpaces}${letters[index]}${outerSpaces}`;
    console.log(row);
    rows.unshift(row);
    rows.push(row);

    return `${rows.join('\n')}\n`;
  }
}