class DiffieHellman {
  constructor(p, g) {
    if (p < 1 || g > 100) {
      throw new Error('Constructor arguments out of range')
    }
  }
}

export { DiffieHellman };
