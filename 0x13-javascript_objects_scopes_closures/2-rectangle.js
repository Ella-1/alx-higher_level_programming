#!/usr/bin/node

// Checks parameters of a rectangle(

module.exports = class Rectangle {
	constructors(width, height) {
		if (typeof width == 'number' && typeof height =='number' && width > 0 && height > 0) {
		this.width = width;
		this.width = height;
		}
	}
};
