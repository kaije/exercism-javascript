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
    let cleanedNumber = this.removePunctuation(this.formattedNumber);
    cleanedNumber = this.removeWhitespace(cleanedNumber);
    cleanedNumber = this.removeCountryCd(cleanedNumber);
    
    return cleanedNumber;
  }

  removePunctuation(number) {
    return number.replace(/[^a-zA-Z0-9 ]/g,'');
  }

  removeWhitespace(number) {
    return number.replace(/\s/g,'');
  }
  
  removeCountryCd(number) {
    if (number.length === 11 && number.charAt(0) === '1') {
      return number.slice(1);
    }
    return number;
  }

  isValid(cleanedNumber) {
    return !cleanedNumber.match(/[a-zA-Z]/g) && cleanedNumber.length === 10;
  }
}
