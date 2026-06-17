/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const atMost = (maxUnique) => {
        let result = 0;
        let left = 0;
        const map = new Map();

        for(let right=0;right < s.length;right++) {
            addToMap(map,s[right]);

            while(map.size > maxUnique) {
                removeFromMap(map,s[left]);
                left++;
            }

            result += right - left + 1;
        }

        return result;
    }

    return atMost(3) - atMost(2);
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