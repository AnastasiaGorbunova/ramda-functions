import * as R from 'ramda';

const thunkify = (func) => {
	return (...args) => {
		return () => func(...args);
	}
};

// console.log('thunkify', thunkify((a, b) => a + b)(25, 17)()); //=> 42
