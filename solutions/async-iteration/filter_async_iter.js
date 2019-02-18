export async function* filterAsyncIter(iterable, pred) {
  let index = 0;
  for await (const x of iterable) {
    if (pred(x, index)) {
      yield x;
    }
    index++;
  }
}