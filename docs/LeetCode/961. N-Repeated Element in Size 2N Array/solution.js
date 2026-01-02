/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const counter = {};

  for (let i = 0; i, nums.length; i++) {
    if (counter[nums[i]] === 1) {
      return nums[i];
    } else {
      counter[nums[i]] = 1;
    }
  }
};
