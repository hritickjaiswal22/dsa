/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    return Math.max(maxSubarrayLength(answerKey,"T",k),maxSubarrayLength(answerKey,"F",k))
};

const maxSubarrayLength = (str,char,k) => {
    let result = 0;
    let left = 0;
    const set = new Set();

    for(let right = 0;right < str.length;right++) {
        while(str[right] !== char && set.size === k) {
            set.delete(left);
            left++;
        }

        if(str[right] !== char) set.add(right);

        result = Math.max(result,right - left + 1)
    }

    return result;
}