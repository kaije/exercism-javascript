export default function transpose(input) {
  if (input.length === 0) {
    return [];
  }

  let items = input.map(value => value.split(""));

  //console.log(`items=${items}`);
  return items[0];
}
