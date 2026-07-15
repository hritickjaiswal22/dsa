/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
  let result = 0;

  ages.sort((a, b) => a - b);

  for (let i = 0; i < ages.length; i++) {
    const minAge = Math.floor(0.5 * ages[i]) + 7;

    const low = findLow(ages, minAge);
    const high = findHigh(ages, ages[i]);

    if (low <= high) {
      result += high - low;
    }
  }

  return result;
};

/**
 * @param {number[]} ages
 * @param {number} minAge
 * @return {number}
 */
var findLow = function (ages, minAge) {
  let resultIndex = Number.MAX_SAFE_INTEGER;
  let low = 0;
  let high = ages.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (ages[mid] > minAge && mid < resultIndex) resultIndex = mid;

    if (ages[mid] <= minAge) low = mid + 1;
    else high = mid - 1;
  }

  if (resultIndex === Number.MAX_SAFE_INTEGER) return -1;
  return resultIndex;
};

/**
 * @param {number[]} ages
 * @param {number} maxAge
 * @return {number}
 */
var findHigh = function (ages, maxAge) {
  let resultIndex = -1;
  let low = 0;
  let high = ages.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (ages[mid] <= maxAge && mid > resultIndex) resultIndex = mid;

    if (ages[mid] <= maxAge) low = mid + 1;
    else high = mid - 1;
  }

  return resultIndex;
};
