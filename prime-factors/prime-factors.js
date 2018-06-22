export default class PrimeFactors {
  constructor() {}

  for(number) {
    return number === 1 ? [] : this.getPrimeFactors(number);
  }

  isPrime(number) {
    let isPrime = true;
    for (var i = 2; i <= number / 2; i++) {
      isPrime = i%number == 0 ? false : true;
    }
    return isPrime;
  }

  getPrimeFactors(number) {
    let divisor = 2;
    let remainder = number;
    let factors = [];

    while( remainder > 1 ) {
      console.log(`checking divisor ${divisor}`);
      if (this.isPrime(divisor)) {
        if ( remainder%divisor === 0 ) {        
          factors.push(divisor);
          remainder /= divisor;
        } else {
          divisor++;
        }
      } else {
        divisor++;
      }
    }
    return factors;
  }
}
