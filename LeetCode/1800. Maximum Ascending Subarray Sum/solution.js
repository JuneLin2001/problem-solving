/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let result = nums[0];
  let newResult = nums[0];

  for (i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      result += nums[i];
    } else {
      newResult = Math.max(newResult, result);
      result = nums[i];
    }
  }

  return Math.max(newResult, result);
};
