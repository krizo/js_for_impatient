/* npm t exercises/arrays/number_lines_test.js
Instructions:
– Create number_lines.js so that this test passes
– Use the Array method .map() to do so
*/

import {strict as assert} from 'assert';

import {numberLines} from './number_lines.js';

test('numberLines', () => {
    const lines = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const numbered = ['01: a', '02: b', '03: c', '04: d', '05: e', '06: f', '07: g', '08: h', '09: i', '10: j'];
    assert.deepEqual(numberLines(lines), numbered);
});
