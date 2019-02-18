export function filter(arr, callback) {
  return arr.reduce(
    (result, elem, index) => {
      if (callback(elem, index, arr)) {
        result.push(elem);
      }
      return result; // important!
    },
    []);
}