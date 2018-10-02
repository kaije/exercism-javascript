export default class Triangle {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    if (this.isEquilateral()) {      
      return 'equilateral';
    }

    if (this.isIsosceles()) {
      return 'isosceles';
    }

    if (this.isScalene()) {
      return 'scalene';
    }
  }

  isEquilateral() {
    return this.a === this.b && this.b === this.c;
  }

  isIsosceles() {
    return this.a === this.b || this.b === this.c || this.c === this.a;
  }

  isScalene() {
    return this.a !== this.b && this.b !== this.c && this.c !== this.a;
  }
}