const fs = require('fs');

const content = fs.readFileSync(process.argv[2]).toString();
const lineBreaks = content.split('\n').length - 1;

console.log(lineBreaks);
