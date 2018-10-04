export default class Triangle {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {

    if (!this.isLegal()) {
      throw new Error();
    }    

    if (this.a === this.b && this.b === this.c) {      
      return 'equilateral';
    }

    if (this.a === this.b || this.b === this.c || this.c === this.a) {
      return 'isosceles';
    }

    if (this.a !== this.b && this.b !== this.c && this.c !== this.a) {
      return 'scalene';
    }
  }

  isLegal() {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      return false;
    }

    return (this.a + this.b >= this.c && this.b + this.c >= this.a && this.c + this.a >= this.b);
  }
}