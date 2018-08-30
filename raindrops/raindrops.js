export default class Raindrops {
  constructor() { }

  convert(num) {
    let str = '';

    if (num < 3) {
      str = num.toString();
    }

    if (num >= 3 && num  % 3 === 0) {
      str = str + 'Pling';
    }

    if (num >= 5 && num % 5 === 0) {
      str = str + 'Plang';
    }

    if (num >= 7 && num % 7 === 0) {
      str = str + 'Plong';
    }

    return str;
  }
}