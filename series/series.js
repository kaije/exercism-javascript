export default class Series {
  constructor(num) {
    this.num = num;
    this.digits = this.getDigits(num);
  }

  slices(cnt) {
      if (cnt > this.num.length) {
          throw new Error('Slice size is too big.');
      }
      return this.num
        .match(new RegExp(`.{1,${cnt}}`, 'g'))
        .map(slice => this.getDigits(slice));
  }

  getDigits(str) {
      return str.split("").map(item => parseInt(item));
  }
}
