export async function mapAndRemoveEmptyStringsAsync(callback, strArr) {
  const strPromises = strArr.map(callback);
  const strs = await Promise.all(strPromises);
  return strs.filter(str => str.length > 0);
}