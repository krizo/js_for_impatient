/* npm t exercises/async-iteration/filter_async_iter_test.js
Instructions:
– Implement filter_async_iter.js
*/

import {strict as assert} from 'assert';

import { filterAsyncIter } from './filter_async_iter.js';

test('filterAsyncIter by element', async () => {
  assert.deepEqual(
    await iToA(filterAsyncIter(aToI(['a', 'b', 'c']), str => true)),
    ['a', 'b', 'c']);
  assert.deepEqual(
    await iToA(filterAsyncIter(aToI(['a', 'b', 'c']), str => false)),
    []);

  assert.deepEqual(
    await iToA(filterAsyncIter(aToI(['a', '', 'c', '']), str => str.length > 0)),
    ['a', 'c']);
  assert.deepEqual(
    await iToA(filterAsyncIter(aToI(['a', '', 'c', '']), str => str.length === 0)),
    ['', '']);

  assert.deepEqual(
    await iToA(filterAsyncIter(aToI([-1, 3, -2, 5]), x => x > 0)),
    [3, 5]);
  assert.deepEqual(
    await iToA(filterAsyncIter(aToI([-1, 3, -2, 5]), x => x < 0)),
    [-1, -2]);
});

test('filterAsyncIter by index', async () => {
  assert.deepEqual(
    await iToA(filterAsyncIter(aToI(['a', 'b', 'c', 'd']), (_, i) => i < 1)),
    ['a']);
  assert.deepEqual(
    await iToA(filterAsyncIter(aToI(['a', 'b', 'c', 'd']), (_, i) => i >= 1)),
    ['b', 'c', 'd']);

  assert.deepEqual(
    await iToA(filterAsyncIter(aToI(['a', 'b', 'c', 'd']), (_, i) => (i % 2) === 0)),
    ['a', 'c']);
  assert.deepEqual(
    await iToA(filterAsyncIter(aToI(['a', 'b', 'c', 'd']), (_, i) => (i % 2) === 1)),
    ['b', 'd']);
});

/**
 * This function is not strictly necessary
 * (because sync iterables are also asynchronously iterable),
 * but we want to use real async iterables.
 */
async function* aToI(array) {
  for (const x of array) {
    yield x;
  }
}
async function iToA(asyncIterable) {
  const result = [];
  for await (const x of asyncIterable) {
    result.push(x);
  }
  return result;
}