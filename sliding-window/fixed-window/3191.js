/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let result = 0;
    const n = nums.length;

    for(let i = 0;i < nums.length;i++) {
        if(nums[i] === 0) {
            if(i + 1 < n && i + 2 < n) {
                result++;
                flip(nums,i)
                flip(nums,i + 1)
                flip(nums,i + 2)
            }
            else return -1;
        }
    }

    return result;
};

const flip = (arr,i) => {
    if(arr[i] === 1) arr[i] = 0;
    else arr[i] = 1;
}