/* npm t exercises/reg-exp/change_quotes_test.js
Instructions:
- Implement change_quotes.js
– Use String.prototype.replace() with a named capture group
*/

import {strict as assert} from 'assert';

import {changeQuotes} from './change_quotes.js';

test('changeQuotes()', () => {
  assert.deepEqual(changeQuotes('"foo" and "bar" and "baz"'), '“foo” and “bar” and “baz”');
  assert.deepEqual(changeQuotes('nothing is quoted'), 'nothing is quoted');
  assert.deepEqual(changeQuotes(''), '');
  assert.deepEqual(changeQuotes('empty: ""'), 'empty: “”');
});
