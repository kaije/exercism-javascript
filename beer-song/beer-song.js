export default class Beer {
  constructor() {

  }

  static verse(bottles) {
    let firstLine;
    let secondLine;
  
    switch (bottles) {
      case 0:
        firstLine = `No more bottles of beer on the wall, no more bottles of beer.`;
        secondLine = `Go to the store and buy some more, 99 bottles of beer on the wall.`;
        break;
      case 1:
        firstLine = `1 bottle of beer on the wall, 1 bottle of beer.`;
        secondLine = `Take it down and pass it around, no more bottles of beer on the wall.`;
        break;
      default:
        firstLine = `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`;
        secondLine =`Take one down and pass it around, ${bottles-1} bottles of beer on the wall.`;
    }
  
    return `${firstLine}\n${secondLine}\n`;
  }
}