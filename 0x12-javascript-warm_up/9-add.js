#!/usr/bin/node

function add (i, j) {
  return i + j;
}

const i = parseInt(process.argv[2]);
const j = parseInt(process.argv[3]);

console.log(add(i, j));
