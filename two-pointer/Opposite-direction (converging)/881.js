// 5m43s
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let left = 0;
    let right = people.length - 1;
    let result = 0;

    people.sort((a,b) => a - b);

    while(left <= right) {
        const sum = left != right ? people[left] + people[right] : people[left];

        if(sum <= limit) {
            result++;
            left++;
            right--
        } else {
            result++;
            right--
        }
    }

    return result;
};