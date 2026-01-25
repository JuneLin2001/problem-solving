/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => b - a);

  let left = 0;
  let right = k - 1;
  let minimumDifference = Infinity;

  while (right < nums.length) {
    const difference = nums[left] - nums[right];
    minimumDifference = Math.min(minimumDifference, difference);
    left++;
    right++;
  }

  return minimumDifference;
};
