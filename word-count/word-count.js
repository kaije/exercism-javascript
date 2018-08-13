export default class Words {
  constructor() {}

  count(str) {
    let counts = {};
    let words = str.split(' ').map( word => word.toLowerCase() );
    words.forEach( word => counts[word] ? counts[word]++ : counts[word] = 1);
    return counts;
  }
}