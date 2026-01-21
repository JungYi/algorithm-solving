/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length === 0) return init;

    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
        console.log(`result: ${result}, fn(result, nums[i]): ${fn(result, nums[i])}`);
    }
    
    return result;
};

const nums = [1,2,3,4];
// const fn = function sum(accum, curr) { return accum + curr; };
const fn = function sum(accum, curr) { return accum + curr * curr; };
const init = 100;
console.log(reduce(nums, fn, init)); // 10