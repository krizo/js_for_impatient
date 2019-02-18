/**
 * Parameter: async iterable of lines
 * Result: async iterable of numbered lines
 */
export async function* numberLines(linesAsync) {
  let counter = 1;
  for await (const line of linesAsync) {
    yield counter + ': ' + line;
    counter++;
  }
}
