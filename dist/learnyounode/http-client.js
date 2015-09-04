'use strict';

var http = require('http');

function httpReq(url) {
  return new Promise(function (resolve, reject) {
    http.get(url, function (res) {
      res.setEncoding('utf8');
      resolve(res);
    });
  });
}

var onData = function onData(res) {
  return res.on('data', function (data) {
    return console.log(data);
  });
};
var onError = function onError(data) {
  return data.on('error', function (err) {
    return console.log.bind(console);
  });
};

httpReq(process.argv[2]).then(onData)['catch'](onError);