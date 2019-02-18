export function handleNamedParameters(params) {
  params = params || {};
  const x = params.x || 0;
  const y = params.y || 0;
  const color = params.color || 'black';
  return [x, y, color];
}
