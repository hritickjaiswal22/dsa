/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let result = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for(let i = 0;i < k;i++) {
        sum += nums[i]
    }

    result = Math.max(result,sum / k);

    for(let i = k;i < nums.length; i++) {
        sum -= nums[i - k];
        sum += nums[i]

        result = Math.max(result,sum / k);
    }

    return result;
};