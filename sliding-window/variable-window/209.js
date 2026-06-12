// 19m 16s

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let i = 0;
    let j = -1; // sum would be from i+1 to j
    let result = Number.MAX_SAFE_INTEGER;

    while(i < nums.length) {
        while(i < nums.length) {
            sum += nums[i];

            if(sum >= target) break;
            i++;
        }

        while(j < i && i < nums.length) {
            result = Math.min(result,i - j);

            j++;
            sum -= nums[j];

            if(sum < target) {
                sum -= nums[i];
                break;
            }
        }
    }

    if(result === Number.MAX_SAFE_INTEGER) return 0;

    return result;
};