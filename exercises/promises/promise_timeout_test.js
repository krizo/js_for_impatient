/* npm t exercises/promises/promise_timeout_test.js
Instructions:
– Implement promise_timeout.js
– Signature: timeout(ms, promise)
– Use internally: setTimeout(ms, callback)
*/

import {strict as assert} from 'assert';

import {timeout} from './promise_timeout.js';

test('Waiting longer than timeout must cause error', () => {
    return timeout(500, delay(1000))
    .then(() => {
        assert.fail('No error due to timeout!');
    })
    .catch((err) => {
        // As expected, we got an error
        assert.ok(err instanceof Error);
    });
});
test('Must forward Promise results', () => {
    return timeout(0, Promise.resolve(123))
    .then(result => {
        assert.equal(result, 123);
    })
    .catch(() => {
        assert.fail('Unexpected rejection');
    });
});
test('Must forward Promise rejections', () => {
    return timeout(0, Promise.reject('error'))
    .then(result => {
        assert.fail('Unexpected resolution');
    })
    .catch(reason => {
        assert.equal(reason, 'error');
    });
});

//----- Helper function

function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}
