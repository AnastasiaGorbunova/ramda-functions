import * as R from 'ramda';

import { compose } from 'functions/compose';

export const prop = (key, obj) => {
	if (obj) {
		return obj[key];
	}
	return (_obj) => prop(key, _obj);
};

// console.log(prop('name')({ name: 'John', age: 25 }));
//
// console.log(compose(R.inc, prop('x'))({x : 3}));

// console.log(prop('x', {x : 100}));
