export function changeQuotes(str) {
  return str.replace(/"(?<inner>[^"]*)"/gu, '“$<inner>”');
}
