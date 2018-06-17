class Gigasecond {
  constructor(birthdate) {
    this.birthdate = birthdate;
  }

  date() {
    return new Date(this.birthdate.setSeconds(1000000000));
  }
} 

export default Gigasecond;