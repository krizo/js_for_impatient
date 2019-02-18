/* npm t exercises/operators/instanceof_exrc.js
Instructions:
- Run this test (it fails).
- Change the second parameters of assert.equal() so that the test passes
*/

import { strict as assert } from 'assert';

test('instanceof', () => {
  // @ts-ignore
  assert.equal('abc' instanceof String, false);
  // @ts-ignore
  assert.equal(null instanceof Object, false);
  // @ts-ignore
  assert.equal(undefined instanceof Object, false);

  assert.equal([true, false] instanceof Array, true);
  assert.equal([true, false] instanceof Object, true);
  assert.equal({} instanceof Object, true);
});
