import * as R from 'ramda';

const ap = (fn, arg) => {
	if (typeof fn === 'function') {
		return (data) => {
			return fn(data)(arg(data));
		};
	}

	return (values) => {
		let result = [];
		fn.forEach((func) => {
			values.forEach((value) => {
				result = result.concat([func(value)]);
			})
		});
		return result;
	}
};

const addOne = (value) => value + 1;

// console.log(ap([addOne, R.add(3)])([1, 2, 3])); //=> [2, 4, 6, 4, 5, 6]
// console.log(ap([R.concat('tasty '), R.toUpper])(['pizza', 'salad'])); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]


// if only two functions, we can just add one parameter
// console.log(ap(R.concat, R.toUpper)('Ramda')); //=> 'RamdaRAMDA'

// S - combinator
const S = f => g => x => f(x)(g(x));
