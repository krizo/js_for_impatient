/* npm t exercises/async-iteration/number_lines_test.js
Instructions:
– Implement number_lines.js
– Use an async generator to do so.
*/

import {strict as assert} from 'assert';
import { Readable } from 'stream';
import { numberLines } from './number_lines.js';

test('numberLines', async () => {
  const asyncIterable = numberLines(generateLines());
  assert.deepEqual(
    await asyncIterableToArray(asyncIterable),
    [
      '1: first',
      '2: second',
    ]);
});

async function asyncIterableToArray(asyncIterable) {
  let result = [];
  for await (const value of asyncIterable) {
    result.push(value);
  }
  return result;
}
async function* generateLines() {
  yield 'first';
  yield 'second';
}
