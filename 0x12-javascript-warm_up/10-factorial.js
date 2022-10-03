#!/usr/bin/node

const num = Number.parseInt(process.argv[2]);
let result = 1;
function factorial (a) {
  if (a === 1) {
    return 1;
  } else {
    return (a * factorial(a - 1));
  }
}

if (!isNaN(num)) {
  result = factorial(num);
  console.log(result);
} else {
  console.log(result);
}
