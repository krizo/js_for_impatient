// @ts-nocheck

import {resolve} from 'path';
import {readdir, stat} from 'fs';
import {promisify} from 'util';

const readdirAsync = promisify(readdir);
const statAsync = promisify(stat);

export function listFilesAsync(filePath) {
  return statAsync(filePath)
  .then(stats => {
    if (stats.isDirectory()) {
      return readdirAsync(filePath)
      // Ensure result is deterministic
      // Ignore files starting with a dot
      .then(childNames => childNames.filter(x => !x.startsWith('.')).sort())
      .then(sortedNames =>
        Promise.all(
          sortedNames.map(childName =>
            listFilesAsync(resolve(filePath, childName)) ) ) )
      .then(subTrees => {
        return flatten(subTrees);
      });
    } else {
      return [ filePath ];
    }
  });  
}

function flatten(arr) {
  return [].concat(...arr);
}
