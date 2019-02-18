/* npm t exercises/generators/cycle_over_gen_test.js
Instructions:
– Implement cycle_over_gen.js
– Manual version: exercises/sync-iteration-implement/cycle_over_manually_test.js
*/

import {strict as assert} from 'assert';

import { cycleOver } from './cycle_over_gen.js';

test('No item means empty sequence (immediate end) [gen]', () => {
    //@ts-ignore
    assert.deepEqual([...cycleOver()], []);
  });
  
  test('First two different items (different) via destructuring [gen]', () => {
    //@ts-ignore
    const [a,b] = cycleOver('eeny', 'meeny', 'miny');
    assert.deepEqual([a, b], ['eeny', 'meeny']);
  });
  
  test('First two items (same) via destructuring [gen]', () => {
    //@ts-ignore
    const [a,b] = cycleOver('single');
    assert.deepEqual([a, b], ['single', 'single']);
  });
  
  test('First five items via destructuring [gen]', () => {
    //@ts-ignore
    const [a,b,c,d,e] = cycleOver('eeny', 'meeny', 'miny');
    assert.deepEqual([a, b,c,d,e], ['eeny', 'meeny', 'miny', 'eeny', 'meeny']);
  });
  