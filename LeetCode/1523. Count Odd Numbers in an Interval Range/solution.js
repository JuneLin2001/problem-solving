/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let result = 0;
  while (low <= high) {
    if (low % 2 === 1) {
      result++;
    }
    low++;
  }

  return result;
};
