/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  let arrLength = nums.length;
  let goodPairs = 0;
  let totalPairs = (arrLength * (arrLength - 1)) / 2;
  let HashMap = new Map();

  for (let i = 0; i < arrLength; i++) {
    let diff = i - nums[i];
    if (HashMap.has(diff)) {
      goodPairs += HashMap.get(diff);
      HashMap.set(diff, HashMap.get(diff) + 1);
    } else {
      HashMap.set(diff, 1);
    }
  }

  return totalPairs - goodPairs;
};
