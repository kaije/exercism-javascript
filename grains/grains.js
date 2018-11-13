import BigInt from './lib/big-integer';

export default class Grains {
  constructor() {}
  square(id) {
    return BigInt(2).pow(id-1).toString();
  }
}
