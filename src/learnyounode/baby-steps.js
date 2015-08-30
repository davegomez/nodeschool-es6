const sum = process.argv
  .map( x => +x )
  .filter( x => Number.isInteger(x) )
  .reduce( (y, x) => y + x, 0 );

console.log(sum);
