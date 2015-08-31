'use strict';

var fs = require('fs');

function lineCounter(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, function (err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}

var countLines = function countLines(data) {
  return data.toString().split('\n').length - 1;
};
var printCount = function printCount(lines) {
  return console.log(lines);
};

lineCounter(process.argv[2]).then(countLines).then(printCount)['catch'](console.log.bind(console));