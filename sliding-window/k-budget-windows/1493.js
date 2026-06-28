// ~20 m

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let result = 0;
    let left = 0;
    let subs = false;

    for(let right = 0;right < nums.length;right++) {
        while(nums[right] === 0 && subs && left < right) {
            if(nums[left] === 0) subs = false;

            left++;
        }

        if(nums[right] === 0) subs = true;

        result = Math.max(result,right - left)
    }

    return result;
};

// Better solution

var longestSubarray = function(nums) {
    let left = 0;
    let zeroCount = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        // Expand the window: count the zero if we see one
        if (nums[right] === 0) {
            zeroCount++;
        }

        // Shrink the window: if we have more than one zero, move 'left'
        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // Calculate the window size. 
        // Since we MUST delete one element, the length is (right - left + 1) - 1, which simplifies to right - left
        maxLength = Math.max(maxLength, right - left);
    }

    return maxLength;
};