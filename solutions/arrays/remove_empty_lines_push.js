export function removeEmptyLines(lines) {
  const result = [];
  for (const line of lines) {
    if (line.length > 0) {
      result.push(line);
    }
  }
  return result;
}
