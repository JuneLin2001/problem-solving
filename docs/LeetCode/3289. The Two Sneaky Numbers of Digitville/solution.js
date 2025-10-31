/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  const counter = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]]) {
      counter[nums[i]]++;
    } else {
      counter[nums[i]] = 1;
    }
  }

  for (let key in counter) {
    if (counter[key] === 2) {
      result.push(parseInt(key));
    }
  }

  return result;
};
