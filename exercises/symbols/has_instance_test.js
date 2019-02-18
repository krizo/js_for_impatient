/* npm t exercises/symbols/has_instance_test.js
Instructions:
- Implement has_instance.js so that the test passes.
– Use the property key Symbol.hasInstance
– Syntax for creating the class PrimitiveString: check the material on symbols
*/

import {strict as assert} from 'assert';

import { PrimitiveString } from './has_instance.js';

test('Symbol.hasInstance', () => {
  // @ts-ignore
  assert.equal('abc' instanceof String, false);
  assert.equal(new String('abc') instanceof String, true);

  // @ts-ignore
  assert.equal('abc' instanceof PrimitiveString, true);
  assert.equal(new String('abc') instanceof PrimitiveString, false);

  // @ts-ignore
  assert.equal(123 instanceof PrimitiveString, false);
});
