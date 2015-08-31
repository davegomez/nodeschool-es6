'use strict';

var fs = require('fs');
var path = require('path');

var ext = '.' + process.argv[3];

function fileList(dirPath) {
  return new Promise(function (resolve, reject) {
    fs.readdir(dirPath, function (err, list) {
      if (err) {
        return reject(err);
      }
      resolve(list);
    });
  });
}

var extractFileNames = function extractFileNames(list) {
  return list.filter(function (item) {
    return path.extname(item) === ext;
  });
};
var printFiles = function printFiles(list) {
  return Promise.all(list.map(function (file) {
    return console.log(file);
  }));
};

fileList(process.argv[2]).then(extractFileNames).then(printFiles)['catch'](console.log.bind(console));