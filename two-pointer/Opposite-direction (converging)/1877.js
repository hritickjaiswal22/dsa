// 5 m

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = 0;
    nums.sort((a,b) => a - b);

    while(left < right) {
        result = Math.max(result,nums[left] + nums[right]);
        left++;
        right--;
    }

    return result;
};