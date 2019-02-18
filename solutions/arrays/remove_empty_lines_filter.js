export function removeEmptyLines(lines) {
    return lines.filter(line => line.length > 0);
}