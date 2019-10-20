import * as R from 'ramda';
import {compose} from 'functions/compose';

const props = (keys, obj) => {
	if(obj) {
		return keys.map((key) => obj[key])
	}
	return (_obj) => props(keys, _obj);
};

const fullName = compose(R.join(' '), props(['first', 'last']));
console.log('props', fullName({last : 'Bullet-Tooth', age : 33, first : 'Tony'})); //=> 'Tony Bullet-Tooth'

// console.log('props', props(['x', 'y'], {x : 1, y : 2})); //=> [1, 2]
// console.log('props', props(['c', 'a', 'b'], {b : 2, a : 1})); //=> [undefined, 1, 2]
