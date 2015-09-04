'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var fs = require('fs');
var path = require('path');

var ext = '.' + process.argv[3];

function fileList(dirPath) {
  return new Promise(function (resolve, reject) {
    fs.readdir(dirPath, function (err, list) {
      if (err) return reject(err);
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
  return Promise.all(console.log.apply(console, _toConsumableArray(list)));
};

fileList(process.argv[2]).then(extractFileNames).then(printFiles)['catch'](console.log.bind(console));