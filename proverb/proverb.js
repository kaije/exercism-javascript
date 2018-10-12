export default function proverb(...consequences) {
  const first = consequences[0];
  let curr;
  let next;
  let proverb;

  while (consequences.length > 1) {
    curr = consequences.shift();
    next = consequences[0];
    proverb = proverb ? `${proverb}\n` : "";
    proverb = `${proverb}For want of a ${curr} the ${next} was lost.`;
  }
  proverb = `${proverb}\nAnd all for the want of a ${first}.`;
  return proverb;
}
