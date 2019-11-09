import * as R from 'ramda';

import { propEq } from 'functions/propEq';

const allPass = (conditions) => {
	return (...elements) => {
		const passedConditions = conditions.filter((condition) => condition(...elements));
		return conditions.length === passedConditions.length;
	}
};

// const isQueen = propEq('rank', 'Q');
// const isSpade = propEq('suit', '♠︎');

// console.log('allPass', allPass([isQueen, isSpade])({rank : 'Q', suit : '♠︎'}));
// console.log('allPass', R.allPass([isQueen, isSpade])({rank : 'Q', suit : '♠︎'}));

// console.log(allPass([R.equals(10)])(10, 4, 3));
// console.log(R.allPass([R.equals(10)])(1));
//
// console.log(allPass([R.lte])('a', 'b'));
// console.log(R.allPass([R.lte])('a', 'b'));


