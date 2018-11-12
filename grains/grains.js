import BigInt from './lib/big-integer';

export default class Grains {
  constructor() {}
  square(id) {
    return `${BigInt(2 ** (id - 1))}`;
  }
}
