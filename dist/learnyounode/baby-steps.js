"use strict";

var sum = process.argv.map(function (x) {
  return +x;
}).filter(function (x) {
  return Number.isInteger(x);
}).reduce(function (y, x) {
  return y + x;
}, 0);

console.log(sum);