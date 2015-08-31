const fs = require('fs');
const path = require('path');

const ext = `.${process.argv[3]}`;

function fileList(dirPath) {
  return new Promise(
    function (resolve, reject) {
      fs.readdir(dirPath, function(err, list) {
        resolve(list);
        reject(err);
      });
    }
  );
}

fileList(process.argv[2])
  .then(function (list) {
    return list.filter(item => path.extname(item) === ext);
  })
  .then(function (list) {
    list.forEach(file => console.log(file));
  });
