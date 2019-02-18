export function* iterNestedArrays(value) {
  if (value instanceof Array) {
    for (const x of value) {
      yield* iterNestedArrays(x);
    }
  }
  else {
    yield value;
  }
}