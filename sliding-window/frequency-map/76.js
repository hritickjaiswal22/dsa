/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return "";

    let i = 0;
    let j = -1;
    const tMap = new Map()
    const sMap = new Map()
    let resultLength = Number.MAX_SAFE_INTEGER;
    let resultIndex = -1;
    let flag = false;

    for(let i = 0; i < t.length; i++) {
        addToMap(tMap,t[i])
    }

    while(i < s.length) {
        while(i < s.length) {
            addToMap(sMap,s[i]);

            if(isPermutation(tMap,sMap)) {
                flag = true;
                break;
            }

            i++;
        }

        while(j < i && flag) {
            if(i - j < resultLength) {
                resultLength = i - j;
                resultIndex = j + 1;
            }

            j++;
            removeFromMap(sMap,s[j])

            if(!isPermutation(tMap,sMap)) {
                flag = false;
                i++;
                break;
            }
        }
    }

    if(resultLength === Number.MAX_SAFE_INTEGER) return ""

    return s.substring(resultIndex,resultIndex + resultLength)
};

const isPermutation = (map1,map2) => {
    const map1Keys = map1.keys()

    for (const map1Key of map1Keys) {
        if(map1.get(map1Key) > (map2.get(map1Key) || 0)) return false
    }

    return true;
}

const addToMap = (map,value) => {
    const freq = map.get(value) || 0;

    map.set(value,freq + 1);
}

const removeFromMap = (map,value) => {
    const freq = map.get(value);

    if(freq - 1 === 0) {map.delete(value);return;}

    map.set(value,freq - 1);
}

// ADOBECODEBANC