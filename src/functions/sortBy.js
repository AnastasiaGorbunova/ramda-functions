import * as R from 'ramda';

import {prop} from 'functions/prop';
import {compose} from 'functions/compose';

const sortBy = (sortFunc, data) => {
	if(data) {
		return sortFunc(sortFunc, data)
	}
	return (_data) => {
		const copyData = _data.slice();
		return copyData.sort((a, b) => {
			console.log({a, b});
			let funcA = sortFunc(a);
			let funcB = sortFunc(b);
			console.log({funcA, funcB});

			if (funcA === funcB) {
				return 0;
			}
			return funcA > funcB ? 1 : -1;
		})
	}
};

const pairs = [[-1, 1], [-2, 2], [-3, 3]];
console.log('sort', sortBy(prop(0))(pairs)); //=> [[-3, 3], [-2, 2], [-1, 1]]

console.log(R.prop(0)(pairs));

const sortByNameCaseInsensitive = R.sortBy(compose(R.toLower, prop('name')));
const alice = {
	name: 'ALICE',
	age: 101
};
const bob = {
	name: 'Bob',
	age: -10
};
const clara = {
	name: 'clara',
	age: 314.159
};
const people = [clara, bob, alice];
console.log(sortByNameCaseInsensitive(people)); //=> [alice, bob, clara]
