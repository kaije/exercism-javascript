export default class School {
  constructor() {
    this.grades = {};
  }
  add(name, grade) {
    Object.keys(this.grades).includes(grade.toString()) 
      ? this.grades[grade].push(name)
      : this.grades[grade] = [name];
  }
  roster() {
    return this.grades;
  }
}