/* npm t exercises/promises/my_promisify_test.js
Instructions:
– Implement my_promisify.js
– In lines A and B, you can see how Node’s callbacks work
*/

import {strict as assert} from 'assert';

import {myPromisify} from './my_promisify.js';

test('Fulfillment', (done) => {
  const f = (arg, callback) => {
    callback(null, 'success '+arg); // (A)
  };
  const pf = myPromisify(f);
  pf('good').then(x => {
    assert.equal(x, 'success good');
    done();
  });
});

test('Rejection', (done) => {
  const f = (arg, callback) => {
    callback('failure '+arg); // (B)
  };
  const pf = myPromisify(f);
  pf('bad').catch(err => {
    assert.equal(err, 'failure bad');
    done();
  });
});