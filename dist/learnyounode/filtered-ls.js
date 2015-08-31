'use strict';

var fs = require('fs');
var path = require('path');

var ext = '.' + process.argv[3];

function fileList(dirPath) {
  return new Promise(function (resolve, reject) {
    fs.readdir(dirPath, function (err, list) {
      resolve(list);
      reject(err);
    });
  });
}

fileList(process.argv[2]).then(function (list) {
  return list.filter(function (item) {
    return path.extname(item) === ext;
  });
}).then(function (list) {
  list.forEach(function (file) {
    return console.log(file);
  });
});