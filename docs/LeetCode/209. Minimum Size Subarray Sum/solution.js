/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLength = nums.length + 1;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < nums.length) {
    currentSum += nums[right];

    while (currentSum >= target) {
      if (minLength > right - left + 1) {
        minLength = right - left + 1;
      }
      currentSum -= nums[left];
      left++;
    }

    right++;
  }
  if (minLength === nums.length + 1) {
    return 0;
  } else {
    return minLength;
  }
};
