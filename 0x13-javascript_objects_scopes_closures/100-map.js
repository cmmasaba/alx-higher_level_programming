#!/usr/bin/mode

const list = require('./100-data').list;
const mappedlist = list.map(function (element, index) {
  return element * index;
});
console.log(list);
console.log(mappedlist);
