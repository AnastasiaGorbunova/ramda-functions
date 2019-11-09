import * as R from 'ramda';

const pipe = (...functions) => {
	return (data, ...args) => {
		return functions.reduce((accumulator, currentFunction) => {
			return currentFunction(accumulator, ...args);
		}, data);
	}
};

// const getName = (user) =>  user.name;
// const addQuestionMark = (string) =>  `${string}?`;
// const addExclamationMark = (string) => `${string}!`;

// console.log('pipe', pipe(
// 	getName,
// 	addQuestionMark,
// 	addExclamationMark
// )({name : 'Nastyashka'}));

// const inc = R.add(1);
// const dbl = R.multiply(2);
//
// const calculator = pipe(inc, dbl, dbl);
//
// console.log('pipe', calculator(10));

// console.log('pipe', pipe(Math.pow, R.negate, R.inc)(3, 4));
