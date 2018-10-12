export default function proverb(...consequences) {
  const final = consequences[0];
  let curr;
  let next;

  let proverb;

  consequences.forEach((element, index) => {
    curr = element;
    next = index < consequences.length - 1 ? consequences[index + 1] : null;
    if (next) {
      proverb = proverb ? `${proverb}\n` : "";
      proverb = `${proverb}For want of a ${curr} the ${next} was lost.`;
    }
  }, this);
  proverb = `${proverb}\nAnd all for the want of a ${final}.`;
  return proverb;
}
