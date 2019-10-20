import * as R from 'ramda';

import { prop } from 'functions/prop';

// const sortBy = () => {
//
// };


const sortByFirstItem = R.sortBy(prop(0));
const pairs = [[-1, 1], [-2, 2], [-3, 3]];
console.log('sort', sortByFirstItem(pairs)); //=> [[-3, 3], [-2, 2], [-1, 1]]

// const sortByNameCaseInsensitive = sortBy(R.compose(R.toLower, R.prop('name')));
// const alice = {
// 	name: 'ALICE',
// 	age: 101
// };
// const bob = {
// 	name: 'Bob',
// 	age: -10
// };
// const clara = {
// 	name: 'clara',
// 	age: 314.159
// };
// const people = [clara, bob, alice];
// console.log(sortByNameCaseInsensitive(people)); //=> [alice, bob, clara]
