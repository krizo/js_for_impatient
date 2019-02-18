/* npm t exercises/async-js/read_file_cb_exrc.js
Instructions:
- The first test is synchronous, implement the second test via the callback-based readFile()
- For the test to work asynchronously, you need to call done() at the end
*/

import {strict as assert} from 'assert';
import * as path from 'path';

const testFilePath = path.resolve(__dirname, 'read_file_cb_exrc_data.txt');

import {readFileSync} from 'fs';

test('Read file synchronously', () => {
  const text = readFileSync(testFilePath, { encoding: 'utf8' }).trim();
  assert.equal(text, 'The test data');
});

import {readFile} from 'fs';

test('Read file via callback', (done) => { // call done() once you are finished
  // EXERCISE: Implement this test
});
