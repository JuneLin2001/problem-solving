/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) continue;

    const sumLeft = nums.slice(0, i).reduce((acc, cur) => acc + cur, 0);
    const sumRight = nums.slice(i).reduce((acc, cur) => acc + cur, 0);

    if (sumLeft === sumRight) result += 2;
    if (sumLeft === sumRight - 1) result += 1;
    if (sumLeft === sumRight + 1) result += 1;
  }

  return result;
};
