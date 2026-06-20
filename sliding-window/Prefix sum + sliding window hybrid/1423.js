/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const n = cardPoints.length;
    const remLength = n - k;
    let sum = 0;
    let total = 0
    let result = Number.MAX_SAFE_INTEGER;

    for(let i = 0;i < n;i++) {
        total += cardPoints[i];

        if(i < remLength) {
            sum += cardPoints[i];
        } else {
            sum -= cardPoints[i - remLength];
            sum += cardPoints[i];
        }

        if(i >= remLength - 1) result = Math.min(result,sum);
    }

    return total - result;
};