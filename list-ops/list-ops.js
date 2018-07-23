export default class List {
  constructor(members) {
    this.values = members || [];
   }

  append(list) { 
    if (list.values.length > 0) {   
      this.values = [...this.values, ...list.values];
    }
    return this;
  }

  concat(list) {
    return this.append(list);
  }

  filter(func) {
    let filtered = [];
    for (let i = 0; i < this.values.length; i++) {
      if (func(this.values[i])) {
        filtered.push(this.values[i]);
      }
    }
    return new List(filtered);
  }

  length() {
    return this.values.length;
  }

  map(func) {}

  foldl(func) {}

  foldr(func) {}

  reverse() {}
}