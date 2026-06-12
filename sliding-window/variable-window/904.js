// 20m 29s

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const map = new Map()
    let result = 1;
    let i = 0;
    let j = -1;

    while(i < fruits.length) {
        while(i < fruits.length) {
            addToMap(map,fruits[i]);

            if(map.size > 2) break;
            result = Math.max(result,i - j);
            i++
        }

        while(j < i && i < fruits.length) {
            j++;
            removeFromMap(map,fruits[j]);

            if(map.size <= 2) {
                removeFromMap(map,fruits[i]);
                break;
            }
        }
    }

    return result;
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