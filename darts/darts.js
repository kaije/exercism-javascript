function solve(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return null;
  }
  const radii = {
    inner: 1,
    middle: 5,
    outer: 10
  };

  const scores = {
    inner: 10,
    middle: 5,
    outer: 1
  };

  const distance = Math.sqrt(x ** 2 + y ** 2);
  console.log(`distance=${distance}`);
  let score;

  if (distance > radii.outer) {
    score = 0;
  } else if (distance > radii.middle) {
    score = scores.outer;
  } else if (distance > radii.inner) {
    score = scores.middle;
  } else {
    score = scores.inner;
  }
  return score;
}

export { solve };
