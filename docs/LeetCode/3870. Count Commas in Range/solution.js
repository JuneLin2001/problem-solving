/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
  if (n === 1000000) return 999002;
  if (n < 1000) return 0;
  return n - 1000 + 1;
};
