const fs = require('fs');

function lineCounter(filePath) {
  return new Promise(
    function (resolve, reject) {
      fs.readFile(filePath, function(err, data) {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    }
  );
}

const countLines = data => data.toString().split('\n').length -1;
const printCount = lines => console.log(lines);

lineCounter(process.argv[2])
  .then(countLines)
  .then(printCount)
  .catch(console.log.bind(console));
