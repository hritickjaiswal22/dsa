/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const n = nums.length;
    const postfix = Array(n).fill(-1);
    let lastOneIndex = -1;
    let sum = 0;
    let left = 0;
    let result = 0;

    for(let i = n - 1;i >= 0;i--) {
        if(nums[i] === 1) {
            postfix[i] = i;
            lastOneIndex = i;
        } else postfix[i] = lastOneIndex;
    }

    for(let right=0;right < nums.length;right++) {
        sum += nums[right];

        while(sum > goal) {
            sum -= nums[left];
            left++;
        }

        if(sum === goal) {
            if(goal === 0) {
                result += right - left + 1
            }
            else {
                result += postfix[left] - left + 1
            }
        }
    }

    return result;
};

https://gemini.google.com/app/cb34de1d7ab7c859?hl=en-IN
https://gemini.google.com/app/adda09fa37b6ded2?hl=en-IN

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const prefixSum = new Map();
    let sum = 0;
    let result = 0;

    prefixSum.set(0,1);

    for(let i = 0;i < nums.length;i++) {
        sum += nums[i];

        result += (prefixSum.get(sum - goal) || 0);

        const freq = prefixSum.get(sum)

        if(freq) prefixSum.set(sum,freq + 1);
        else prefixSum.set(sum,1)
    }

    return result;
};