// 12m 44s

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;

    let result = 1;
    const set = new Set()
    let i = 0;
    let j = -1; // str is from j+1 to i

    while(i < s.length) {
        while(i < s.length) {
            if(set.has(s[i])) break;

            set.add(s[i]);
            result = Math.max(result,i - j);
            i++;
        }

        while(j < i && i < s.length) {
            j++;
            set.delete(s[j]);

            if(s[j] === s[i]) break;
        }
    }

    return result;
};