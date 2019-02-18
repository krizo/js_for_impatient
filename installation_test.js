import { strict as assert } from 'assert';

const MIN_VERSION = [10, 3];

function greaterOrEqual(numArr1, numArr2) {
  const len = Math.max(numArr1.length, numArr2.length);
  for (let i = 0; i < len; i++) {
    // Missing parts are considered to be zero.
    const num1 = numArr1[i] || 0;
    const num2 = numArr2[i] || 0;
    if (num1 < num2) {
      return false;
    }
    if (num1 > num2) {
      return true;
    }
  }
  // The arrays are “equal”
  return true;
}

test('Is everything installed correctly?', () => {
  // Assert something simple, to make sure that testing works
  assert.equal(1 + 1, 2);

  const installedVersion = process.versions.node
    .split('.')
    .map(str => Number(str));
  assert.ok(
    greaterOrEqual(installedVersion, MIN_VERSION),
    `Please use Node.js ${MIN_VERSION.join(
      '.'
    )} or later. Installed version: ${installedVersion.join('.')}`
  );
});

test('Does greaterOrEqual() work?', () => {
  assert.equal(greaterOrEqual([1, 2, 3], [1, 2]), true);
  assert.equal(greaterOrEqual([1, 2], [1, 2, 3]), false);

  assert.equal(greaterOrEqual([4, 0, 5], [4, 0, 4]), true);
  assert.equal(greaterOrEqual([4, 0, 5], [4, 0, 5]), true);
  assert.equal(greaterOrEqual([4, 0, 5], [4, 0, 6]), false);

  assert.equal(greaterOrEqual([4, 0, 5], [3, 0, 0]), true);
  assert.equal(greaterOrEqual([4, 0, 5], [5, 0, 0]), false);
});
