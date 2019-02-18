export function changeQuotes(str) {
  return str.replace(/"(?<inner>[^"]*)"/ug, '“$<inner>”')
}