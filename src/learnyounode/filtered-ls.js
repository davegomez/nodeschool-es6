const fs = require('fs');
const path = require('path');

const ext = `.${process.argv[3]}`;

function fileList(dirPath) {
  return new Promise(
    function (resolve, reject) {
      fs.readdir(dirPath, (err, list) => {
        if (err) return reject(err);
        resolve(list);
      });
    }
  );
}

const extractFileNames = list => list.filter(item => path.extname(item) === ext);
const printFiles = list => Promise.all(console.log(...list));

fileList(process.argv[2])
  .then(extractFileNames)
  .then(printFiles)
  .catch(console.log.bind(console));
