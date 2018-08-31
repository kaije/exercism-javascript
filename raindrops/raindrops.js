export default class Raindrops {
  constructor() {     
    this.sounds = {
      3: 'Pling',
      5: 'Plang',
      7: 'Plong'
    } 
  }

  convert(num) {
    let str = '';

    for (var factor in this.sounds) {
      str = this.check(str, num, factor);
    }
    return str ? str : num.toString();
  }

  check(str, num, factor) {
    return num >= factor && num % factor === 0
      ? str + this.sounds[factor]
      : str;
  }
}