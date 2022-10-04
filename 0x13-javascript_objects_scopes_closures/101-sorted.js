#!/usr/bin/node

const dict = require('./101-data').dict;
const sortedDict = {};

Object.keys(dict).map(function (key, index) {
  if (sortedDict[dict[key]] === undefined) {
    sortedDict[dict[key]] = [];
  }
  return sortedDict[dict[key]].push(key);
});

console.log(sortedDict);
