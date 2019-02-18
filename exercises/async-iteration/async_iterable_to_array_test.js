/* npm t exercises/async-iteration/async_iterable_to_array_test.js
Instructions:
* Implement async_iterable_to_array.js
* asyncIterableToArray() is an async function
*/

import {strict as assert} from 'assert';
import { asyncIterableToArray } from './async_iterable_to_array.js';

test('asyncIterableToArray', async () => {
  assert.deepEqual(
    await asyncIterableToArray(yieldArray([])),
    []
  );
  assert.deepEqual(
    await asyncIterableToArray(yieldArray(['a', 'b'])),
    ['a', 'b']
  );
  assert.deepEqual(
    await asyncIterableToArray(yieldArray(['a', 'b', 'c'])),
    ['a', 'b', 'c']
  );
});

/** Async generator, returns an async iterable */
async function* yieldArray(arr) {
  yield* arr;
}
