/* npm t exercises/destructuring/object_destructuring_exrc.js
Instructions:
- Change the code so that it uses destructuring and the tests still pass
*/

import {strict as assert} from 'assert';

const obj = {
  first: 'Jane',
  last: 'Doe',
};

test('Properties of the object', () => {
  // BEGIN: use destructuring here
  const first = obj.first;
  const last = obj.last;
  // END: use destructuring here
  
  assert.equal(first, 'Jane');
  assert.equal(last, 'Doe');
});

test('Properties of a property descriptor', () => {
  const desc = Object.getOwnPropertyDescriptor(obj, 'first');
  if (!desc) throw new Error(); // TypeScript: avoid warnings when accessing desc

  // BEGIN: use destructuring here
  const value = desc.value;
  const writable = desc.writable;
  const enumerable = desc.enumerable;
  const configurable = desc.configurable;
  // END: use destructuring here
  
  assert.equal(value, 'Jane');
  assert.equal(writable, true);
  assert.equal(enumerable, true);
  assert.equal(configurable, true);
});
