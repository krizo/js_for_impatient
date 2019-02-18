export function* cycleOver(...vs) {
  if (vs.length === 0) return;
  let i = 0;
  while (true) {
    yield vs[i];
    i = (i+1) % vs.length;
  }
}
