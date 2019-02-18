/* npm t exercises/json/to_from_json_test.js
Instructions: implement to_from_json.js
*/

import {strict as assert} from 'assert';

import {Color, ColorPoint} from './to_from_json.js';

test('to_from_json: Color', () => {
    const c = new Color('red');
    assert.ok(c instanceof Color);
    assert.equal(c.name, 'red');
    assert.equal(String(c), 'Color(red)');
});
test('to_from_json: ColorPoint', () => {
    const cp = new ColorPoint(7, 3, new Color('red'));

    assert.ok(cp instanceof ColorPoint);
    assert.equal(cp.x, 7);
    assert.equal(cp.y, 3);
    assert.ok(cp.color instanceof Color);
    assert.equal(String(cp.color), 'Color(red)');

    assert.equal(String(cp), 'ColorPoint(7, 3, Color(red))');

    assert.throws(() => new ColorPoint(7, 3, 'red'), Error);
});
test('to_from_json: .toJSON()', () => {
    const cp = new ColorPoint(-10, 1, new Color('green'));
    assert.equal(JSON.stringify(cp), '{"x":-10,"y":1,"color":{"name":"green"}}');
});
test('to_from_json: .fromJson()', () => {
    const cp = ColorPoint.fromJson(JSON.parse('{"x":-10,"y":1,"color":{"name":"green"}}'));

    assert.equal(cp.x, -10);
    assert.equal(cp.y, 1);
    assert.ok(cp.color instanceof Color);
    assert.equal(String(cp.color), 'Color(green)');
});
