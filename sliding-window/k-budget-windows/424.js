// 30 m

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const set = new Set()
    let result = 0

    for (const char of s) {
        set.add(char)
    }

    for (const char of set.keys()) {
        const tempSet = new Set()
        let i = 0;
        let j = -1;

        while(i < s.length) {
            while(i < s.length) {
                if(s[i] !== char) {
                    if(k - tempSet.size <= 0) break;

                    tempSet.add(i)
                }

                result = Math.max(result, i - j);
                i++
            }

            while(j < i) {
                j++;

                tempSet.delete(j)

                if(tempSet.size < k) break;
            }

            if(j === i) i++;
        }
    }

    return result;
};