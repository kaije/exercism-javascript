export default class School {
  constructor() {
    this.schoolRoster = {};
  }

  add(name, grade) {
    const childrenInGrade = this.schoolRoster[grade];
    if (childrenInGrade) {
      childrenInGrade.push(name);
      childrenInGrade.sort();
    } else {
      this.schoolRoster[grade] = [name];
      this.sortGrades();
    }
  }

  roster() {
    return JSON.parse(JSON.stringify(this.schoolRoster)); // return deep clone
  }

  grade(grade) {
    return this.schoolRoster[grade]
      ? this.schoolRoster[grade].slice()
      : [];
  }

  sortGrades() {
    const sortedKeys = Object.keys(this.schoolRoster).sort();
    const sortedGrades = {};
    sortedKeys.forEach(key => sortedGrades[key] = this.grade(key));
    return sortedGrades;
  }
}