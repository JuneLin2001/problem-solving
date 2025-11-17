/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      for (let j = 1; j <= k; j++) {
        if (nums[i + j] === 1) {
          return false;
        }
      }
    }
  }

  return true;
};
