function solve(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return null;
  }

  const dartboard = {
    innerCircle: {
      radius: 1,
      score: 10
    },
    middleCircle: {
      radius: 5,
      score: 5
    },
    outerCircle: {
      radius: 10,
      score: 1
    }
  };

  const distanceFromCentre = Math.sqrt(x ** 2 + y ** 2);

  return distanceFromCentre > dartboard.outerCircle.radius
    ? 0
    : distanceFromCentre > dartboard.middleCircle.radius
    ? dartboard.outerCircle.score
    : distanceFromCentre > dartboard.innerCircle.radius
    ? dartboard.middleCircle.score
    : dartboard.innerCircle.score;
  
}

export { solve };
