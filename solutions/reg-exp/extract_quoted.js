export function extractQuoted(str) {
  // Inside function, to be safe w.r.t. .index
  const RE_QUOTED_TEXT = /"([^"]*)"/g;
  const result = [];
  let match;
  while ((match = RE_QUOTED_TEXT.exec(str))) {
    result.push(match[1]);
  }
  return result;
}