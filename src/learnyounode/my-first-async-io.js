const fs = require('fs');

const countLines = new Promise(
  function (resolve, reject) {

  }
);

function countLinesDep(file) {
  return fs.readFile(file).then(function (res) {
    return res.toString().split('\n').length -1;
  });
}

countLines(process.argv[2]).done(function (lines) {
    console.log(lines);
  }, function (err) {
    console.log(err);
  });
