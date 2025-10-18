/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function (nums, k) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let prev = -Infinity;
  for (const num of nums) {
    let curr = Math.max(num - k, prev + 1);
    if (curr <= num + k) {
      count++;
      prev = curr;
    }
  }
  return count;
};
