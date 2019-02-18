/* npm t exercises/promises/list_files_async_test.js
Instructions:
– Implement list_files_async.js via Promises
– It should be an async version of: list_files_sync.js
– Use util.promisify() to convert fs.stat() and fs.readdir() to Promise-based functions
*/

import {strict as assert} from 'assert';
import * as path from 'path';

import {listFilesSync} from './list_files_sync.js';
import {listFilesAsync} from './list_files_async.js';

const TEST_DIR = path.resolve(__dirname, 'list_files_async_test_dir');
const TEST_DIR_FILES = [
  path.resolve(TEST_DIR, 'bar.txt'),
  path.resolve(TEST_DIR, 'foo.txt'),
  path.resolve(TEST_DIR, 'subdir', 'baz.txt'),
];

test('sync', () => {
  const files = listFilesSync(TEST_DIR);
  assert.deepEqual(files, TEST_DIR_FILES);
});
test('async', () => {
  return listFilesAsync(TEST_DIR)
  .then(files => {
    assert.deepEqual(files, TEST_DIR_FILES);
  });
});
