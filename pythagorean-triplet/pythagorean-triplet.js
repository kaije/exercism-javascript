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
}
