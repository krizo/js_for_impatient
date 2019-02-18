import { strict as assert } from 'assert';
import * as path from 'path';

import { readFileSync } from 'fs';

import { readFile } from 'fs';

const testFilePath = path.resolve(__dirname, 'read_file_cb_exrc_data.txt');

test('Read file synchronously', () => {
  const text = readFileSync(testFilePath, { encoding: 'utf8' }).trim();
  assert.equal(text, 'The test data');
});

test('Read file via callback', done => {
  // call done() once you are finished
  readFile(testFilePath, { encoding: 'utf8' }, function(err, text) {
    if (err) {
      console.log(err);
      return;
    }
    text = text.trim();
    assert.equal(text, 'The test data');
    done();
  });
});
