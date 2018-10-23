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
    
    while (index > 0) {
      // add a row for the target letter
      let outerSpaces = '.'.repeat(outerSpacesCnt);
      let innerSpaces = '.'.repeat(innerSpacesCnt);
      let row = `${outerSpaces}${letters[index]}${innerSpaces}${letters[index]}${outerSpaces}`;
      console.log(row);
      rows.unshift(row);
      rows.push(row);
      outerSpacesCnt++;
      innerSpacesCnt = innerSpacesCnt > 2 ? innerSpacesCnt - 2 : 0;
      index--;
    }

    return `${rows.join('\n')}\n`;
  }
}