import * as R from 'ramda';

const equals3 = R.equals(3);

const all = (func) => {
	return (array) => {
		const initialLength = array.length;
		const passedValues = array.filter((elem) => func(elem));
		return initialLength === passedValues.length;
	}
};

// console.log('all', all(equals3)([3, 3, 3, 3])); //=> true
// console.log('all', all(equals3)([3, 3, 1, 3])); //=> false


// ALL PASS

const isQueen = R.propEq('rank', 'Q');
const isSpade = R.propEq('suit', '♠︎');

const allPass = (conditions) => {
	return (...elements) => {
		const passedConditions = conditions.filter((condition) => condition(...elements));
		return conditions.length === passedConditions.length;
	}
};

console.log('allPass', allPass([isQueen, isSpade])({rank : 'Q', suit : '♠︎'}));
console.log('allPass', R.allPass([isQueen, isSpade])({rank : 'Q', suit : '♠︎'}));

// console.log(allPass([R.equals(10)])(10, 4, 3));
// console.log(R.allPass([R.equals(10)])(1));
//
// console.log(allPass([R.lte])('a', 'b'));
// console.log(R.allPass([R.lte])('a', 'b'));


