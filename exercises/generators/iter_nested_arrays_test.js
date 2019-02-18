/* npm t exercises/generators/iter_nested_arrays_test.js
Instructions:
- Implement iter_nested_arrays.js
*/

import {strict as assert} from 'assert';

import {iterNestedArrays} from './iter_nested_arrays.js';

test('iterNestedArrays()', () => {
  assert.deepEqual([ ...iterNestedArrays([]) ], []);
  assert.deepEqual([ ...iterNestedArrays(['a']) ], ['a']);
  assert.deepEqual([ ...iterNestedArrays([[['a']]]) ], ['a']);
  assert.deepEqual([ ...iterNestedArrays(['a', ['b', 'c'], 'd']) ], ['a', 'b', 'c', 'd']);
  assert.deepEqual([ ...iterNestedArrays(['a', ['b', ['c']], 'd']) ], ['a', 'b', 'c', 'd']);
});