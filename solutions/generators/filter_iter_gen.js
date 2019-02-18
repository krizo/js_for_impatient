export function* filterIter(iterable, pred) {
  let index = 0;
  for (const x of iterable) {
    if (pred(x, index)) {
      yield x;
    }
    index++;
  }
}