// TOO MUCH TIME

// https://gemini.google.com/app/8db3bae19605aeac

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
    const n = arr.length;
    const MOD = 1e9 + 7;
    let result = 0;

    arr.sort((a,b) => a - b);

    for (let i = 0; i < n - 1; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if (sum === target) {
                if (arr[left] === arr[right]) {
                    let j = left;

                    while (arr[j] === arr[left]) j++;

                    const count = j - left;

                    // result += ((count) * (count - 1)) / 2;
                    result = (result + (((count) * (count - 1)) / 2)) % MOD;
                    break;
                }
                else {
                    let j = left;
                    let k = right;

                    while (arr[j] === arr[left]) j++;
                    while (arr[k] === arr[right]) k--;

                    const leftCount = j - left;
                    const rightCount = right - k;

                    // result += (leftCount * rightCount);
                    result = (result + (leftCount * rightCount)) % MOD;
                    left = j;
                    right = k;
                }


            } else if (sum > target) right--
            else left++;
        }
    }

    return result;
};