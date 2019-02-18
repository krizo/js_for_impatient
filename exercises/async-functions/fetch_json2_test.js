/* npm t exercises/async-functions/fetch_json2_test.js
Instructions:
- Same instructions as exercises/promises/fetch_json_test.js
- This time: don’t use Promises, use an async function
*/

import {strict as assert} from 'assert';

import {fetchJson} from './fetch_json2.js';

// Test callback returns a Promise! This enables async testing.
test('URL to JSON object (2)', () =>
  fetchJson('http://localhost:8080/bond.json')
  .then(json => {
    assert.deepEqual(json, {
      first: 'Jane',
      last: 'Bond',
    });
  })
);
