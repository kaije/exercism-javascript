export default class Flattener {
  constructor() {}
  flatten(input) {
    let flattened = [];
    let working = input.map( element => Array.isArray(element) ? element.join('|') : element );
    working = working.join('|');
    flattened = working.split('|').map(element => parseInt(element)).filter( element => !isNaN(element));
    return flattened;
  }
}
