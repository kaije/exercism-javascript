export default class Acronyms {
  static parse(name) {
    const words = name.split(' ');
    const acronym = words
      .map( word => word.charAt(0).toUpperCase())
      .join('');
    return acronym;
  }
}
