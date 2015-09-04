const fileList = require('./make-it-modular_mod');

const dir = process.argv[2];
const ext = process.argv[3];
const print = (err, list) => {
  if (err) console.log(err);
  list.forEach(item => console.log(item));
}

fileList(dir, ext, print);
