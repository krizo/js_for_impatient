/* npm t exercises/arrays/remove_empty_lines_push_test.js
Instructions:
– Create remove_empty_lines_push.js so that this test passes
– You can assume that the parameter is always an Array of strings
– Use a for-of loop and Array.prototype.push
– Similar: remove_empty_lines_push_test.js
*/

import {strict as assert} from 'assert';

import {removeEmptyLines} from './remove_empty_lines_push.js';

test('removeEmptyLines() via .push()', () => {
  assert.deepEqual(
    removeEmptyLines(['', 'a', 'b', '', '', 'c', 'd', '']),
    ['a', 'b', 'c', 'd']);
  assert.deepEqual(
    removeEmptyLines([]),
    []);
  assert.deepEqual(
    removeEmptyLines(['a']),
    ['a']);
  assert.deepEqual(
    removeEmptyLines(['a', 'b']),
    ['a', 'b']);
  assert.deepEqual(
    removeEmptyLines(['']),
    []);
  assert.deepEqual(
    removeEmptyLines(['', 'a', '']),
    ['a']);
});
