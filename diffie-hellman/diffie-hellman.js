class DiffieHellman {
  constructor(p, g) {
    if (p < 1 || g > 100) {
      throw new Error('Constructor arguments out of range')
    }
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('Constructor arguments must be prime')
    }
  }
  isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
      if (number % start++ < 1) {
        return false;
      }
    }
    return number > 1;
  }
}

export { DiffieHellman };
