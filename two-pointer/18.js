/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const n = nums.length;
    const result = [];
    nums.sort((a,b) => a - b);

    for(let i = 0;i < n - 3;i++) {
        for(let j = i + 1;j < n - 2;j++) {
            let left = j + 1;
            let right = n - 1;

            while(left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if(sum === target) {
                    result.push([nums[i] , nums[j] , nums[left] , nums[right]]);

                    const leftValue = nums[left];
                    const rightValue = nums[right];

                    while(leftValue === nums[left] && left < right) left++;
                    while(rightValue === nums[right] && left < right) right--;
                }
                else if(sum > target) right--;
                else left++;
            }

            const jValue = nums[j];

            while(nums[j] === jValue && j < n - 2) j++;
            j--;
        }

        const iValue = nums[i];

        while(nums[i] === iValue && i < n - 3) i++;
        i--;
    }

    return result;
};