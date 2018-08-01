export function encode(str) {
  let encoded = '';
  if (str) {
    let runs = str.match(/(.)\1+|./g);
    console.log(runs);
    runs.forEach( run => { 
      if (run.length > 1) {     
        encoded = `${encoded}${run.length}${run.charAt(0)}`
      } else {
        encoded = `${encoded}${run}`;
      }
      console.log(encoded);
    });
  }
  return encoded;
}

export function decode(str) {

}