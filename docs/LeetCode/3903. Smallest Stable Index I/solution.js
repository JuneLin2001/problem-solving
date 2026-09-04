/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    const maximum = Math.max(...nums.slice(0, i + 1));
    const minimum = Math.min(...nums.slice(i));

    if (maximum - minimum <= k) return i;
  }

  return -1;
};
