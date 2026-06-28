/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let result = 0;
    let total = 0;
    let left = 0;
    const map = new Map();

    for(let right = 0;right < nums.length;right++) {
        addToMap(map,nums[right]);

        total += (map.get(nums[right]) - 1);

        while(total >= k) {
            result += nums.length - right;
            total -= (map.get(nums[left]) - 1);
            removeFromMap(map,nums[left]);
            left++;
        }
    }

    return result;
};

const addToMap = (map,value) => {
    const freq = map.get(value) || 0;

    map.set(value,freq + 1);
}

const removeFromMap = (map,value) => {
    const freq = map.get(value);

    if(freq - 1 === 0) {map.delete(value);return;}

    map.set(value,freq - 1);
}