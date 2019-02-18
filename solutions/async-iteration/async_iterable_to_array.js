export async function asyncIterableToArray(asyncIterable) {
  let result = [];
  for await (const value of asyncIterable) {
    result.push(value);
  }
  return result;
}
