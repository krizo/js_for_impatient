export function numberLines(lines) {
  const maxLineNumber = lines.length;
  const maxDigitCount = maxLineNumber.toString().length;
    // Alternatively: Math.floor(Math.log10(maxLineNumber))+1
  return lines.map((line, index) => (index+1).toString().padStart(maxDigitCount, '0')+': '+line);
}