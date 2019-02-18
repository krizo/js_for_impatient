export function timeout(ms, promise) {
    return new Promise(function (resolve, reject) {
        promise.then(resolve, reject);
        // Works, because Promise doesn’t change
        // after resolution or rejection
        setTimeout(function () {
            reject(new Error(`Timeout after ${ms} ms`));
        }, ms);
    });
}
