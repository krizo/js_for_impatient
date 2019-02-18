/* npm t exercises/arrays/filter_via_reduce_test.js
Instructions:
- Use Array.prototype.reduce() to implement filter_via_reduce.js
– You can mutate (change) the current state in the callback (but you can also solve this exercise without doing so).
*/

import {strict as assert} from 'assert';

import {filter} from './filter_via_reduce.js';

test('filter', () => {
  assert.deepEqual(filter([], () => true), []);
  assert.deepEqual(filter([], () => false), []);
  assert.deepEqual(filter(['a', 'b', 'c', 'd'], () => true), ['a', 'b', 'c', 'd']);
  assert.deepEqual(filter(['a', 'b', 'c', 'd'], () => false), []);
  assert.deepEqual(filter([3, -4, 5, 0], (x) => x > 0), [3, 5]);
  assert.deepEqual(filter(['a', 'b', 'c', 'd'], (x, i) => (i%2) === 0), ['a', 'c']);
});
