/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  let result = 0;
  result += nums[0];
  nums.splice(0, 1);

  nums.sort((a, b) => a - b);

  result += nums[0] + nums[1];

  return result;
};