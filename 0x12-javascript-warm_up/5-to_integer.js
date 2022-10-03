#!/usr/bin/node

const argm = parseInt(process.argv[2]);

if (argm) {
	console.log('My number: ' + argm);
} else {
	console.log('Not a number');
}
