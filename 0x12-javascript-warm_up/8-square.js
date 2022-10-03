#!/usr/bin/node

const num = Number.parseInt(process.argv[2]);
if (!isNaN(num)) {
  let i = num;
  while (i) {
    let j = num; let str = '';
    while (j) {
      str += 'X'; j--;
    }
    console.log(str); i--;
  }
} else {
  console.log('Missing size');
}
