/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const resultArr = [];
    for (let i = 0; i < arr.length; i++)
        resultArr.push(fn(arr[i], i));

    const resultArr2 = new Array(arr.length); // 3칸 미리 확보    
    for (let i = 0; i < arr.length; i++)
        resultArr2[i] = fn(arr[i], i); // push 대신 i번째 칸에 직접 대입!

    return resultArr;
};