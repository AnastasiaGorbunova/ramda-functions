import * as R from 'ramda';

import { getCircularReplacer } from "core/utils";

export const equals = (a, b) => {
	const types = ['boolean', 'number', 'string'];

	if ((typeof a !== typeof b)) {
		return false;
	}

	if (!a && !b) {
		return true;
	}

	if (types.includes(typeof a) && types.includes(typeof b)) {
		return a === b;
	}

	// for handling cyclical data
	const aReplaced = JSON.parse(JSON.stringify(a, getCircularReplacer()));
	const bReplaced = JSON.parse(JSON.stringify(b, getCircularReplacer()));

	if (Array.isArray(aReplaced) && Array.isArray(bReplaced)) {
		if (a.length !== b.length) {
			return false;
		}
		return aReplaced.every((elem, index) => {
			return equals(elem, bReplaced[index])
		});
	}

	if (typeof aReplaced === 'object') {
		if (Object.keys(a).length !== Object.keys(b).length) {
			return false;
		}
		return Object.keys(aReplaced).every(value => {
			return equals(aReplaced[value], bReplaced[value]);
		});
	}
};

// console.log('equals', equals([1, 2, {
// 	c : 3,
// 	b : {d : 3},
// 	a : 1
// }, 4, 5], [1, 2, {
// 	a : 1,
// 	b : {d : 3},
// 	c : 3
// }, 4, 5]));

// console.log(equals(1, 1)); //=> true
// console.log(equals(1, '1')); //=> false
// console.log(equals([null, 2, 3], [1, 2, 3])); //=> true

// const a = [];
// a[0] = a;
// a[1] = 4;
// const b = [];
// b[0] = b;
// b[1] = 4;
// console.log(equals(a, b));

// const a = {}; a.v = a;
// const b = {}; b.v = b;
// console.log(equals(a, b));
