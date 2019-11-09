import * as R from 'ramda';

const pipeWith = (func) => {
	return (functions) => {
		return (data, ...args) => {
			return functions.reduce((accumulator, currentFunction, index) => {
				return !index ? currentFunction(accumulator, ...args) : func(currentFunction, accumulator);
			}, data);
		}
	}
};

// const plusOne = (n) => n + 1;
// const makeNull = (n) => null;
// const plusTwo = (n) => n + 2;

// const f = pipeWith((f, res) => R.isNil(res) ? res : f(res))([Math.pow, R.negate, R.inc])(3, 4);
//
// console.log(f);
