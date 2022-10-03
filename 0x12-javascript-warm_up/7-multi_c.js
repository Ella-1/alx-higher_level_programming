#!/usr/bin/node

const limits = parseInt(process.argv[2]);

if (limits) {
  for (let i = 0; i < limits; ++i) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
