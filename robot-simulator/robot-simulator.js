class Robot {
  constructor() {
    this.directions = ["east", "west", "north", "south"];
    this.bearing = null;
  }
  orient(currentDirection) {
    if (!this.directions.includes(currentDirection)) {
      throw new InvalidInputError();
    } else {
      this.bearing = currentDirection;
    }
  }
}

class InvalidInputError extends Error {}

export { Robot, InvalidInputError };
