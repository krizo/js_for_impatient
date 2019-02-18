export class Queue {
  constructor() {
    this._data = [];
  }
  get length() {
    return this._data.length;
  }
  enq(value) {
    // Add to the queue at the end of the Array
    this._data.push(value);
  }
  deq() {
    if (this.length === 0) {
      throw new Error('Queue is empty');
    }
    // Take from the queue at the beginning of the Array
    return this._data.shift();
  }
}