'use strict';

var fs = require('fs');
var path = require('path');

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

var listFiles = function listFiles(dir, ext, callback) {
  var extractFileNames = function extractFileNames(list) {
    return list.filter(function (item) {
      return path.extname(item) === '.' + ext;
    });
  };
  var fileNames = function fileNames(list) {
    return callback(null, list);
  };

  return fileList(dir).then(extractFileNames).then(fileNames)['catch'](callback);
};

module.exports = listFiles;