import * as R from 'ramda';

const getName = (user) => {
	return user.name;
};

const lowercase = (string) => {
	return string.toLowerCase();
};

const getThreeLetters = (string) => {
	return string.substring(0, 3);
};


const pipe = (...functions) => {
	return (data) => {
		return functions.reduce((accumulator, currentFunction) => {
			return currentFunction(accumulator);
		}, data);
	}
};

console.log(pipe(
	getName,
	lowercase,
	getThreeLetters
)({name : 'Nastyashka'}));

const inc = R.add(1);
const dbl = R.multiply(2);

const calculator = pipe(inc, dbl, dbl);

console.log(calculator(10));
