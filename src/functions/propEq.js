import * as R from 'ramda';

import { equals } from 'functions/equals';

export const propEq = (key, prop) => {
	return (obj) => {
		return equals(obj[key], prop);
	}
};

// console.log('propEq', propEq('foo', 0)({foo : 0}));
// console.log('propEq', propEq('foo', [1, 2, 3])({foo : [1, 2, 3]}));
// console.log('R propEq', R.propEq('foo', [1, 2, 3])({foo : [1, 2, 3]}));
