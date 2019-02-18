/* npm t exercises/reg-exp/extract_quoted_test.js
Instructions:
- Implement extract_quoted.js
– Use RegExp.prototype.exec()
*/

import {strict as assert} from 'assert';

import {extractQuoted} from './extract_quoted.js';

test('extractQuoted()', () => {
  assert.deepEqual(extractQuoted('"foo" and "bar" and "baz"'), ['foo', 'bar', 'baz']);
  assert.deepEqual(extractQuoted('nothing is quoted'), []);
  assert.deepEqual(extractQuoted(''), []);
  assert.deepEqual(extractQuoted('empty: ""'), ['']);
});