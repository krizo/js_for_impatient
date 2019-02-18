/* npm t exercises/arrays/sort_objects_test.js
Instructions:
- Create the file sort_objects.js
- Ensure this test passes
*/

import {strict as assert} from 'assert';

import {sortObjectsByName} from './sort_objects.js';

test('sortObjectsByName', () => {
	assert.deepEqual(
        sortObjectsByName([
            {name: 'C'},
            {name: 'b'},
            {name: 'Ä'},
            {name: 'd'},
        ]),
        [
            {name: 'Ä'},
            {name: 'b'},
            {name: 'C'},
            {name: 'd'},
        ]
    );
});
