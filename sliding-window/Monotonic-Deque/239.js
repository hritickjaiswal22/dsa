// https://gemini.google.com/app/a8d8c8995b0410fa

// 22 mins

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const deque = [];
    const result = [];

    for(let i = 0;i < nums.length;i++) {
        const left = i - k;

        if(left >= 0 && deque.length && deque[0] <= left) {
            deque.shift()
        }

        while(deque.length && nums[i] > nums[deque[deque.length - 1]]) deque.pop();

        deque.push(i);

        if(i >= k - 1) result.push(nums[deque[0]]);
    }

    return result;
};