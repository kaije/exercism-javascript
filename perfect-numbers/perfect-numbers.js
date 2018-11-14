function classify(num) {
  if (num <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }
}

export { classify };
