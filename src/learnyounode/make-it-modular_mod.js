const fs = require('fs');
const path = require('path');

function fileList(dirPath) {
  return new Promise(
    function (resolve, reject) {
      fs.readdir(dirPath, function(err, list) {
        if (err) {
          return reject(err);
        }
        resolve(list);
      });
    }
  );
}

const listFiles = (dir, ext, callback) => {
  const extractFileNames = list => list.filter(item => path.extname(item) === `.${ext}`);
  const fileNames = list => callback(null, list);

  return fileList(dir)
    .then(extractFileNames)
    .then(fileNames)
    .catch(callback);
}

module.exports = listFiles;
