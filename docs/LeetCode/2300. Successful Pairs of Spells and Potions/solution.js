/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const result = [];
  const sortPotions = potions.sort((a, b) => a - b);

  for (let i = 0; i < spells.length; i++) {
    let left = 0;
    let right = sortPotions.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (spells[i] * sortPotions[mid] < success) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    result.push(sortPotions.length - left);
  }

  return result;
};
