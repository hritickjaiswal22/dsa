// 20 mins

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(k === 0) return false;

    const set  = new Set();
    for(let i = 0;i <= k && i < nums.length;i++) {
        if(set.has(nums[i])) return true;

        set.add(nums[i])
    }

    for(let i = k + 1;i < nums.length;i++) {
        set.delete(nums[i - k - 1]);

        if(set.has(nums[i])) return true;

        set.add(nums[i])
    }

    return false;
};