const nums = [-1,0,3,5,9,12], target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // 1. 중간 지점을 찾는다
        /**
         * const mid = Math.floor((left+right)/2);
         * 
         * left와 right가 각각 엄청나게 큰 숫자(예: 20억)일 경우,
         * 둘을 더하는 순간 컴퓨터가 표현할 수 있는 숫자 범위를 넘쳐버리는
         * '오버플로우(Overflow)' 발생 가능
         */
        const mid = left + Math.floor((right - left) / 2);
        
        // 2. 숫자를 비교한다
        if (nums[mid] === target) return mid; // if (중간값이 타겟이면) return 중간인덱스;

        if (nums[mid] < target) left = mid+1; // if (중간값 < 타겟이면) 왼쪽 포인터를 옮긴다;
        else right = mid-1;                   // else (중간값 > 타겟이면) 오른쪽 포인터를 옮긴다;
    }

    return -1;
};

// Output: 4
// Explanation: 9 exists in nums and its index is 4

console.log(`search(nums, target): ${search(nums, target)}`);