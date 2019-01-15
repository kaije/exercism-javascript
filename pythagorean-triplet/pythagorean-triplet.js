export default class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  sum() {
    return this.a + this.b + this.c;
  }
  product() {
    return this.a * this.b * this.c;
  }
  isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2;
  }
  static where(props) {
    let maxFactor = props.maxFactor;
    let triplets = [];
    for (let a = 1; a <= maxFactor - 2; a++) {
      for (let b = 2; b <= maxFactor - 1; b++) {
        for (let c = 3; c <= maxFactor; c++) {
          if (a < b && b < c && a * a + b * b === c * c) {
            triplets.push(new Triplet(a, b, c));
          }
        }
      }
    }
    return triplets;
  }
}
