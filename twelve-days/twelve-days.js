class TwelveDays {
  constructor() {
    this.gifts = {
      1: { day: "first", gift: "a Partridge in a Pear Tree" },
      2: { day: "second", gift: "two Turtle Doves" },
      3: { day: "third", gift: "three French Hens" }
    };
  }
  verse(id) {
    return `On the ${
      this.gifts[id].day
    } day of Christmas my true love gave to me: ${this.getList(id)}.\n`;
  }
  getList(id) {
    let list = "";
    for (let i = id; i >= 1; i--) {
      list = list.length > 0 ? `${list}, ` : list;
      list = `${list}${i === 1 && id > 1 ? `and ` : ``}${this.gifts[i].gift}`;
    }
    return list;
  }
}

export { TwelveDays };
