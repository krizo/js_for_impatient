/* npm t exercises/async-js/map_cb_test.js
Instructions: Implement map_cb.js
*/

import {strict as assert} from 'assert';

import {mapCb} from './map_cb.js';

function toUpperCaseCb(str, index, callback) {
  callback(null, str.toUpperCase());
}
function returnIndexCb(x, index, callback) {
  callback(null, index);
}

test('toUpperCaseCb', (done) => {
  mapCb(['foo', 'bar', 'baz'], toUpperCaseCb,
    function (error, result) {
      assert.equal(error, null);
      assert.deepEqual(result, ['FOO', 'BAR', 'BAZ']);
      done();
    }
  );
});
test('illegal first argument', (done) => {
  mapCb(null, toUpperCaseCb,
    function (error, result) {
      assert.ok(error instanceof Error);
      assert.equal(result, undefined);
      done();
    }
  );
});
test('empty', (done) => {
  mapCb([], toUpperCaseCb,
    function (error, result) {
      assert.equal(error, null);
      assert.deepEqual(result, []);
      done();
    }
  );
});
test('returnIndexCb', (done) => {
  mapCb([0, 0, 0, 0], returnIndexCb,
    function (error, result) {
      assert.equal(error, null);
      assert.deepEqual(result, [0, 1, 2, 3]);
      done();
    }
  );
});
