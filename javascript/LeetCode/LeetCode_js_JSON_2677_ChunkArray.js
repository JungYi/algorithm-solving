/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (arr.length === 0) return [];

    const resultArr = [];
    for (let i = 0; i < arr.length; i += size) {
        resultArr.push(arr.slice(i, i+size));
    }
    // return resultArr;

    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
};

var chunkPractice = function(arr, size) {
    if (arr.length === 0) return [];

    const resultArr = [];
    let chunkedArr = [];

    for (let i = 0; i < arr.length; i++) {
        chunkedArr.push(arr[i]);

        if (chunkedArr.length === size) {
            resultArr.push(chunkedArr);
            chunkedArr = [];
        }
    }
    // 다 안 찼는데 루프가 끝났을 경우,
    if (chunkedArr.length > 0)
        resultArr.push(chunkedArr);

    return resultArr;
};