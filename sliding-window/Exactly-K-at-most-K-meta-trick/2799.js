/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    const totalSet = new Set(nums);

    const atMost = (k) => {
        const map = new Map();
        let left = 0;
        let result = 0;

        for(let right = 0;right < nums.length;right++) {
            addToMap(map,nums[right]);

            while(map.size > k) {
                removeFromMap(map,nums[left]);
                left++
            }

            result += right - left + 1;
        }

        return result;
    }

    return atMost(totalSet.size) - atMost(totalSet.size - 1);
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