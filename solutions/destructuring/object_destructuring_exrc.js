import {strict as assert} from 'assert';

const obj = {
  first: 'Jane',
  last: 'Doe',
};

test('Properties of the object', () => {
  // BEGIN: use destructuring here
  const {first, last} = obj;
  // END: use destructuring here
  
  assert.equal(first, 'Jane');
  assert.equal(last, 'Doe');
});

test('Properties of a property descriptor', () => {
  const desc = Object.getOwnPropertyDescriptor(obj, 'first');
  if (!desc) throw new Error(); // TypeScript: avoid warnings when accessing desc
  
  // BEGIN: use destructuring here
  let {value,writable,enumerable,configurable} = desc;
  // END: use destructuring here
  
  assert.equal(value, 'Jane');
  assert.equal(writable, true);
  assert.equal(enumerable, true);
  assert.equal(configurable, true);
});
