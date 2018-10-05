export default class Triangle {
  constructor(a, b, c) {
    this.sides = {
      a: a,
      b: b,
      c: c
    };
  }

  kind() {
    if (!this.isLegal()) {
      throw new Error();
    }

    return this.sides.a === this.sides.b && this.sides.b === this.sides.c
      ? "equilateral"
      : this.sides.a === this.sides.b ||
        this.sides.b === this.sides.c ||
        this.sides.c === this.sides.a
        ? "isosceles"
        : "scalene";
  }

  isLegal() {
    return (
      Object.values(this.sides).every(side => side > 0) &&
      (this.sides.a + this.sides.b >= this.sides.c &&
        this.sides.b + this.sides.c >= this.sides.a &&
        this.sides.c + this.sides.a >= this.sides.b)
    );
  }
}
