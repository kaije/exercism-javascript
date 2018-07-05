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
    return this.sort();
  }

  grade(grade) {
    return this.grades[grade] 
      ? this.grades[grade].sort().map( name => name ) 
      : [];
  }

  sort() {
    let sortedKeys = Object.keys(this.grades).sort();
    let sortedGrades = {};
    sortedKeys.forEach(function(key) {
      sortedGrades[key] = this.grade(key).map( name => name );
    }, this);
    return sortedGrades;
  }
}