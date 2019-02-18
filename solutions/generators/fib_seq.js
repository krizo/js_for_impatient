export function* fibSeqGen(max = Infinity) {
  let current = 0;
  let next = 1;

  for (let i = 0; i <= max; i++) {
    yield current;
    [current, next] = [next, current + next];
  }
}