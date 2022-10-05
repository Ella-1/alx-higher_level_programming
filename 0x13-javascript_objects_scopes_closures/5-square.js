#!/usr/bin/node

module.exports = class Square extends requirs('./4-rectangle.js') {
	constructor (size) {
		super(size,size);
	}
};
