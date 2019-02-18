/* npm t exercises/arrays/queue_via_array_test.js
Instructions:
– Implement the class Queue via an Array
*/

import {strict as assert} from 'assert';

import {Queue} from './queue_via_array.js';

test('Using a queue', () => {
  const queue = new Queue();
  assert.equal(queue.length, 0);
  
  queue.enq('a');
  queue.enq('b');
  assert.equal(queue.length, 2);
  
  assert.equal(queue.deq(), 'a');
  assert.equal(queue.deq(), 'b');
  assert.equal(queue.length, 0);
  
  assert.throws(
    () => queue.deq(),
    // @ts-ignore
    { message: 'Queue is empty' });
});

test('Queue must not be a subclass of Array', () => {
  const queue = new Queue();
  assert.equal(queue instanceof Array, false);
});
