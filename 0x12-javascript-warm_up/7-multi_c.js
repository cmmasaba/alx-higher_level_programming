#!/usr/bin/node

let i = Number.parseInt(process.argv[2]);
if (!isNaN(i)) {
  while (i) {
    console.log('C is fun');
    i--;
  }
} else {
  console.log('Missing number of occurrences');
}
