// 21 mins

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    const map = new Map();
    let sum = 0;
    let result = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];

        add(map,nums[i])
    }

    if (map.size === k) result = Math.max(result, sum);

    for (let i = k; i < nums.length; i++) {
        sum -= nums[i - k];
        remove(map,nums[i - k]);
        sum += nums[i];
        add(map,nums[i])

        if (map.size === k) result = Math.max(result, sum);
    }

    return result
};

function add(map, value) {
    const val = map.get(value)

    if (val === undefined) {
        map.set(value, 1)
    } else {
        map.set(value, val + 1)
    }
}

function remove(map,value) {
    const val = map.get(value)

    if(val - 1 === 0) map.delete(value);
    else map.set(value,val - 1)
}