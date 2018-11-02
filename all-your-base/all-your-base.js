export default class Converter {
  constructor() {}

  convert(digits, base, newBase) {
    let converted = [1];
    let decimal = digits
      .reverse()
      .map( (digit, index) => {
        console.log(digit);
        console.log(base);
        console.log(index);
        return digit * base^index;
        }
      ).reverse();

    console.log(decimal);

    return converted;
  }
}
