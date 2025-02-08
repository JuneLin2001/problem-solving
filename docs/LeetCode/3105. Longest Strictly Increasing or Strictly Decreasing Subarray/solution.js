/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let increase = 1;
  let decrease = 1;
  let maxLen = 1;

  for (i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      increase++;
      decrease = 1;
    } else if (nums[i] < nums[i - 1]) {
      decrease++;
      increase = 1;
    } else {
      increase = 1;
      decrease = 1;
    }
    maxLen = Math.max(maxLen, increase, decrease);
  }

  return maxLen;
};
