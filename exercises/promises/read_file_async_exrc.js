/* npm t exercises/promises/read_file_async_exrc.js
Instructions:
- The first test is synchronous, implement the second test via the Promise-based readFilePromisified()
- For the test to work asynchronously, you need to return a Promise (chain)
*/

import { strict as assert } from 'assert';
import * as path from 'path';

import { readFileSync } from 'fs';

import { readFile } from 'fs';
import { promisify } from 'util';

const testFilePath = path.resolve(__dirname, 'read_file_async_exrc_data.txt');

test('Read file synchronously', () => {
  const text = readFileSync(testFilePath, { encoding: 'utf8' }).trim();
  assert.equal(text, 'The test data');
});
const readFilePromisified = promisify(readFile);

test('Read file via Promise', () => {
  // EXERCISE: Implement this test
});
