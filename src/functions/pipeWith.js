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

const plusOne = (n) => {
	console.log('plus one');
	return n + 1;
};

const makeNull = (n) => {
	console.log('make null');
	return null;
};

const plusTwo = (n) => {
	console.log('plus two');
	return n + 2;
};

const pipeWhileNotNil = pipeWith((f, res) => {
	return R.isNil(res) ? res : f(res)
});

const f = pipeWhileNotNil([plusOne, makeNull, plusTwo]);

f(3);

const f = pipeWith((f, res) => R.isNil(res) ? res : f(res))([Math.pow, R.negate, R.inc])(3, 4);

console.log(f);
