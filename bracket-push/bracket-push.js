function bracketPush(str) {
  const openingBrackets = ["{", "[", "("];
  let brackets = str.split("");
  let open = [];

  brackets.forEach(element => {
    if (openingBrackets.includes(element)) {
      open.push(element);
      console.log(open);
    } else {
      let item = open.pop();
      if (!matched(element, item)) {
        return false;
      }
    }
  });

  return open.length === 0;
}

function matched(open, close) {
  switch (open) {
    case "{":
      return close === "}";
    case "(":
      return close === ")";
    case "[":
      return close === "]";
    default:
      return false;
  }
}

export { bracketPush };
