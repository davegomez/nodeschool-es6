'use strict';

var fileList = require('./make-it-modular_mod');

var dir = process.argv[2];
var ext = process.argv[3];
var print = function print(err, list) {
  if (err) console.log(err);
  list.forEach(function (item) {
    return console.log(item);
  });
};

fileList(dir, ext, print);