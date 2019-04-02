class Robot {
  constructor() {
    this.directions = ["east", "west", "north", "south"];
    this.bearing = null;
    this.coordinates = [0, 0];
  }
  at(x, y) {
    this.coordinates = [x, y];
  }
  orient(currentDirection) {
    if (!this.directions.includes(currentDirection)) {
      throw new InvalidInputError();
    } else {
      this.bearing = currentDirection;
    }
  }
  turnRight() {
    switch (this.bearing) {
      case "north":
        this.orient("east");
        break;
      case "east":
        this.orient("south");
        break;
      case "south":
        this.orient("west");
        break;
      case "west":
        this.orient("north");
        break;
      default:
        null;
    }
  }
  turnLeft() {
    switch (this.bearing) {
      case "north":
        this.orient("west");
        break;
      case "west":
        this.orient("south");
        break;
      case "south":
        this.orient("east");
        break;
      case "east":
        this.orient("north");
        break;
      default:
        null;
    }
  }
  advance() {
    switch (this.bearing) {
      case "north":
        this.coordinates[1]++;
        break;
      case "east":
        this.coordinates[0]++;
        break;
      case "south":
        this.coordinates[1]--;
        break;
      case "west":
        this.coordinates[0]--;
        break;
      default:
        null;
    }
  }
  static instructions(instructions) {
    let translations = {
      L: 'turnLeft',
      R: 'turnRight',
      A: 'advance'
    }    
    return instructions.split().map( instruction => translations[instruction]);
  }
}

class InvalidInputError extends Error {}

export { Robot, InvalidInputError };
