#!/usr/bin/node

const i = Number.parseInt(process.argv[2]);
const j = Number.parseInt(process.argv[3]);

function add (a, b) {
  return a + b;
}
console.log(add(i, j));
