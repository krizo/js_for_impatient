export function countMatches(arr, pred) {
  return arr.reduce((state, elem) => pred(elem) ? state+1 : state, 0);
}