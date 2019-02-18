import {resolve} from 'path';
import {readdirSync, statSync} from 'fs';

export function listFilesSync(filePath) {
  const stats = statSync(filePath);
  if (stats.isDirectory()) {
    let childNames = readdirSync(filePath);
    // Ensure result is deterministic
    childNames = childNames.filter(x => !x.startsWith('.')).sort();
    const subTrees = childNames.map(childName => {
      const childPath = resolve(filePath, childName);
      return listFilesSync(childPath);
    });
    return flatten(subTrees);
  } else {
    return [filePath];
  }
}

function flatten(arr) {
  return [].concat(...arr);
}
