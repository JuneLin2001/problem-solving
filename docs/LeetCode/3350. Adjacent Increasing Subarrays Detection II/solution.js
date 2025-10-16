/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function (nums) {
  if (nums.length <= 1) {
    return 0;
  }

  let count = 1;
  let preCount = 0;
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
    } else {
      result = Math.max(result, Math.floor(count / 2));
      result = Math.max(result, Math.min(count, preCount));
      preCount = count;
      count = 1;
    }
  }

  result = Math.max(result, Math.floor(count / 2));
  result = Math.max(result, Math.min(count, preCount));

  return result;
};
