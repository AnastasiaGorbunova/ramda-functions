import * as R from 'ramda';

const getName = (user) => user.name;

const addQuestionMark = (string) =>  `${string}?`;

const addExclamationMark = (string) => `${string}!`;

export const compose = (...functions) => {
	return (data, ...args) => {
		return functions.reduceRight((accumulator, currentFunction) => {
			return currentFunction(accumulator, ...args);
		}, data);
	}
};

// console.log(compose(Math.abs, R.add(1), Math.pow)(-4, 2));

// console.log(compose(Math.abs, R.add(1), R.multiply(2))(-4));

// console.log('compose', compose(
// 	addQuestionMark,
// 	addExclamationMark,
// 	getName
// )({name : 'Nastyashka'}));
//
// const inc = R.add(1);
// const dbl = R.multiply(2);
//
// const calculator = compose(inc, dbl, dbl);
//
// console.log('compose', calculator(10));
