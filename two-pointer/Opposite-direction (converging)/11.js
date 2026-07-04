/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = -1;

    while(left < right) {
        result = Math.max(result,Math.min(height[left],height[right]) * (right - left));

        if(height[left] < height[right]) left++;
        else right--;
    }

    return result;
};