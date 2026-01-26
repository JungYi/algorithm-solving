/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    // this.numArray = [...nums];
    // for (let i = 1; i < this.numArray.length; i++)
    //     this.numArray[i] += this.numArray[i-1];
    
    this.prefixArr = new Array(nums.length+1).fill(0);
    for (let i = 0; i < nums.length; i++)
        this.prefixArr[i+1] = this.prefixArr[i] + nums[i];
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    // if (left === 0) return this.numArray[right];
    // else return this.numArray[right]-this.numArray[left-1];
    
    return this.prefixArr[right+1]-this.prefixArr[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */