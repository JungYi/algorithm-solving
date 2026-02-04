/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    /**
    return arr.sort((a,b) => {
        const keyA = fn(a);
        const keyB = fn(b);
        return keyA-keyB;
    });
     */
    // A.sort((a, b) => a - b);
    return arr.sort((a, b) => fn(a) - fn(b));
};