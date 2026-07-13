/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  const min = 1;
  const max = Math.min(...ranks) * cars * cars;
  let result = max;
  let low = min;
  let high = max;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);

    if (canBeRepaired(ranks, cars, mid)) {
      result = Math.min(result, mid);
      high = mid - 1;
    } else low = mid + 1;
  }

  return result;
};

/**
 * @param {number[]} ranks
 * @param {number} cars
 * @param {number} maxTime
 * @return {boolean}
 */
const canBeRepaired = (ranks, cars, maxTime) => {
  for (const rank of ranks) {
    const carsThatCanBeRepaired = Math.floor(Math.sqrt(maxTime / rank));

    cars -= carsThatCanBeRepaired;

    if (cars <= 0) return true;
  }

  return cars <= 0;
};
