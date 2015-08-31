const fs = require('fs');

function countLines(filePath) {
  return new Promise(
    function (resolve, reject) {
      fs.readFile(filePath, function(err, data) {
        resolve(data.toString());
        reject(err);
      });
    }
  );
}

countLines(process.argv[2])
  .then(function (data) {
    return data.split('\n').length -1;
  })
  .then(function (lines) {
    console.log(lines);
  });
