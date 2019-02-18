export function mapCb(arr, mapFunc, resultFunc) {
  if (! (arr instanceof Array)) {
    resultFunc(new Error('Not an Array: '+arr));
    return;
  }
  let index = 0;
  let resultArr = new Array(arr.length);
  mapCbRec();

  function mapCbRec() {
    if (index >= arr.length) {
      resultFunc(null, resultArr);
    } else {
      mapFunc(arr[index], index,
        function (err, result) {
          if (err) {
            resultFunc(err);
          } else {
            resultArr[index] = result;
            index++;
            mapCbRec();
          }
        }
      );
    }
  }
}
