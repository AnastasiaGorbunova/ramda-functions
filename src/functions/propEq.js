import * as R from 'ramda';


// TODO: implement 'equals' method
const propEq = (key, prop) => {
	return (obj) => {
		return R.equals(obj[key], prop);
	}
};

// console.log('propEq', propEq('foo', 0)({foo : 0}));


// console.log('propEq', propEq('foo', [1, 2, 3])({foo : [1, 2, 3]}));
// console.log('R propEq', R.propEq('foo', [1, 2, 3])({foo : [1, 2, 3]}));
