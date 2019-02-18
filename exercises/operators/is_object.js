// Function is exported so that the test can import it
export function isObject(x) {
  return x !== null && (typeof x === 'object' || typeof x === 'function');
}
