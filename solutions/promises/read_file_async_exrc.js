import {strict as assert} from 'assert';
import * as path from 'path';

const testFilePath = path.resolve(__dirname, 'read_file_async_exrc_data.txt');

import {readFileSync} from 'fs';

test('Read file synchronously', () => {
    const text = readFileSync(testFilePath, { encoding: 'utf8' }).trim();
    assert.equal(text, 'The test data');
});

import {readFile} from 'fs';
import {promisify} from 'util';
const readFilePromisified = promisify(readFile);

test('Read file via a Promise', () => {
    return readFilePromisified(testFilePath, { encoding: 'utf8' })
    .then(text => {
      text = text.trim();
      assert.equal(text, 'The test data');
    });
});
