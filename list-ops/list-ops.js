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

  concat() {}

  filter() {}

  length() {}

  map(func) {}

  foldl(func) {}

  foldr(func) {}

  reverse() {}
}