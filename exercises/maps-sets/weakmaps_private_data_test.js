/* npm t exercises/maps-sets/weakmaps_private_data_test.js
Instructions:
- Change weakmaps_private_data.js: use WeakMaps for private data, not property names with underscores
- Make sure the tests still pass
*/

import {strict as assert} from 'assert';

import {StringBuilder} from './weakmaps_private_data.js';

test('Empty StringBuilder', () => {
    assert.equal(new StringBuilder().toString(), '');
});
test('Adding strings to a StringBuilder', () => {
    assert.equal(new StringBuilder().add('foo').add('bar').toString(), 'foobar');
});
test('Rule out singleton implementations', () => {
    const sb1 = new StringBuilder().add('sb1');
    const sb2 = new StringBuilder().add('sb2');
    
    assert.equal(sb1.toString(), 'sb1');
    assert.equal(sb2.toString(), 'sb2');
});
test('Is private data hidden?', () => {
    const sb = new StringBuilder();
    assert.deepEqual(Reflect.ownKeys(sb), []);
});

// Similar: exercises/proto-chains-classes/string_builder_symbol_test.js
