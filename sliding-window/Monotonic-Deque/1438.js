// 24 mins

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    const maxDeque = []; // Will store monotonic decreasing
    const minDeque = []; // Will store monotonic increasing
    let left = 0;
    let result = 0

    for(let right = 0;right < nums.length;right++) {
        while(maxDeque.length && minDeque.length && nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
            while(maxDeque[0] <= left) maxDeque.shift()

            while(minDeque[0] <= left) minDeque.shift()

            left++
        }

        while(maxDeque.length && nums[right] > nums[maxDeque[maxDeque.length - 1]]) maxDeque.pop()

        while(minDeque.length && nums[right] < nums[minDeque[minDeque.length - 1]]) minDeque.pop()

        maxDeque.push(right);
        minDeque.push(right);

        if(maxDeque.length && minDeque.length && nums[maxDeque[0]] - nums[minDeque[0]] <= limit) result = Math.max(result,right - left + 1);
    }

    return result;
};