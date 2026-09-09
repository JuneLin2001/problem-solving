/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
  let base = 1000;
  let result = 0;

  while (n >= base) {
    result += n - base + 1;
    base *= 1000;
  }

  return result;
};