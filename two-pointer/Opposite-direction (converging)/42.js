/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    let lMax = 0;
    let rMax = 0;

    while(left < right) {
        if(height[left] > lMax) lMax = height[left];
        if(height[right] > rMax) rMax = height[right];

        if(lMax < rMax) {
            result += lMax - height[left];
            left++;
        } else {
            result += rMax - height[right];
            right--;
        }
    }

    return result;
};