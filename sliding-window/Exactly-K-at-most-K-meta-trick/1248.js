/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const atMost = (maxCount) => {
        let result = 0;
        let oddCount = 0;
        let left = 0;

        for(let right=0;right < nums.length;right++) {
            if(nums[right] % 2 !== 0) oddCount++;
            
            while(oddCount > maxCount && left <= right) {
                if(nums[left] % 2 !== 0) oddCount--;
                left++;
            }

            result += right - left + 1;
        }

        return result;
    }

    return atMost(k) - atMost(k - 1);
};