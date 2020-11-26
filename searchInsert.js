/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let l = nums.length;
    for(let i = 0; i < l; i++) {
        if (nums[i] >= target) return i; 
    }
    return l;
};