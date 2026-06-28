// 12 mins

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    const set = new Set();
    let i = 0;
    let j = -1;
    let result = 0;

    while(i < nums.length) {
        while(i < nums.length) {
            if(nums[i] === 0) {
                if(set.size === k) break;
                set.add(i);
            }

            result = Math.max(result, i - j);
            i++;
        }

        while(j < i) {
            j++;
            set.delete(j);

            if(set.size < k) break;
        }

        if(j === i) i++;
    }

    return result;
};

// Better approach

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let subs = k;
    let result = 0;

    for(let right = 0; right < nums.length; right++) {
        while(nums[right] === 0 && subs === 0 && left <= right) {
            if(nums[left] === 0) subs++;
            left++;
        }

        if(nums[right] === 0 && subs > 0) subs--;

        result = Math.max(result,right - left + 1);
    }

    return result;
};