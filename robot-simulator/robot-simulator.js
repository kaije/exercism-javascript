class Robot {
  constructor() {
    this.directions = ["east", "west", "north", "south"];
    this.bearing = null;
    this.coordinates = [];
  }
  at(x,y) {
    this.coordinates = [x,y];
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
}

class InvalidInputError extends Error {}

export { Robot, InvalidInputError };
