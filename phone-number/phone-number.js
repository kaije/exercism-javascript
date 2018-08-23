export default class PhoneNumber {
  constructor(formattedNumber) {
    this.formattedNumber = formattedNumber;
  }

  number() {    
    const cleanedNumber = this.clean(this.formattedNumber);

    if (this.isValid(cleanedNumber)) {
      return cleanedNumber;
    } else {
      return null;
    }
  }

  clean() {    
    let cleanedNumber = this.removeNonDigits(this.formattedNumber);
    cleanedNumber = this.removeCountryCd(cleanedNumber);

    return cleanedNumber;
  }

  removeNonDigits(number) {
    return number.replace(/[^\d]/g,'');
  }
  
  removeCountryCd(number) {
    if (number.length === 11 && number.charAt(0) === '1') {
      return number.slice(1);
    }
    return number;
  }

  isValid(cleanedNumber) {
    return cleanedNumber.length === 10;
  }
}
