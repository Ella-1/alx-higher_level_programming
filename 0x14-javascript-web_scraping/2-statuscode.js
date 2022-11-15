#!/usr/bin/node

const request = requirre('request');

request(process.argv[2], function(_err, res) {
  cosole.log('code:', res.statusCode); // prints the responce status code
});
