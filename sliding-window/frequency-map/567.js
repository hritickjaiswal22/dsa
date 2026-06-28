// ~16m

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const s1Map = new Map();
    const s2Map = new Map();
    const k = s1.length

    if(s2.length < k) return false;

    for(let i = 0;i < k;i++) {
        addToMap(s1Map,s1[i]);
    }

    for(let i = 0;i < k;i++) {
        addToMap(s2Map,s2[i]);
    }

    if(isPermutation(s1Map,s2Map)) return true;

    for(let i = k;i < s2.length;i++) {
        removeFromMap(s2Map,s2[i - k]);
        addToMap(s2Map,s2[i]);

        if(isPermutation(s1Map,s2Map)) return true;
    }

    return false;
};

const isPermutation = (map1,map2) => {
    const map1Keys = map1.keys()

    for (const map1Key of map1Keys) {
        if(map1.get(map1Key) !== map2.get(map1Key)) return false
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