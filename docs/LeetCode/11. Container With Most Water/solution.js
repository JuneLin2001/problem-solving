/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let mostWater = 0;

  while (right > left) {
    const waterCurrently =
      Math.min(height[left], height[right]) * (right - left);

    mostWater = Math.max(mostWater, waterCurrently);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return mostWater;
};
