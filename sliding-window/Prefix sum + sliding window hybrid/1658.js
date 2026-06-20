/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const n = nums.length;
    const map = new Map();
    let sum = 0;
    let result = Number.MAX_SAFE_INTEGER;

    map.set(0,n);
    for(let i = n - 1;i >= 0;i--) {
        sum += nums[i];

        map.set(sum,i);
    }

    sum = 0;

    if(map.has(x)) result = n - map.get(x);

    for(let i = 0;i < n;i++) {
        sum += nums[i];
        const rem = x - sum;

        if(map.has(rem) && map.get(rem) > i) result = Math.min(result,n - map.get(rem) + i + 1);
    }

    if(result === Number.MAX_SAFE_INTEGER) return -1;

    return result;
};

https://gemini.google.com/app/af8af3d17fe3b0c9