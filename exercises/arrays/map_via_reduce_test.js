/* npm t exercises/arrays/map_via_reduce_test.js
Instructions:
- Use Array.prototype.reduce() to implement map_via_reduce.js
– You can mutate (change) the current state in the callback (but you can also solve this exercise without doing so).
*/

import {strict as assert} from 'assert';

import {map} from './map_via_reduce.js';

test('map() via .reduce()', () => {
  assert.deepEqual(
    map([1, 2, 3], x => x * 2),
    [2, 4, 6]);
  assert.deepEqual(
    map([1, 2, 3], x => 'a'),
    ['a', 'a', 'a']);
  assert.deepEqual(
    map(['a', 'b', 'c'], (x, i) => i),
    [0, 1, 2]);
  assert.deepEqual(
    map(['a', 'b', 'c'], x => x),
    ['a', 'b', 'c']);
  assert.deepEqual(
    map([], x => x),
    []);
});
