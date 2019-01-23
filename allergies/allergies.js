const scores = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
};

/* const scores = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats'
} */

export default class Allergies {
  constructor(score) {
    this.score = score;
  }
  list() {
    let allergies = [];

    if (this.score > 0) {
      for (let item in scores) {
        if (this.score & scores[item]) {
          allergies.push(item);
        }
      }
    }

    return allergies;
  }
}
