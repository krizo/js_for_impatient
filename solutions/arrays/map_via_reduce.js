export function map(arr, callback) {
  return arr.reduce(
    (result, elem, index) => {
      result.push(callback(elem, index, arr));
      return result; // important!
    },
    []);
}