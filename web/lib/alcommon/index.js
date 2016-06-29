'use strict';

var CLASS = prop => {
	this.Swap = (arr, a, b) => {
		var t = arr[a];
		arr[a] = arr[b];
		arr[b] = t;
	}

	return this;
};

module.exports = CLASS;