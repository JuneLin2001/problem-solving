/**
 * @param {number[][]} dimensions
 * @return {number}
 */

var areaOfMaxDiagonal = function (dimensions) {
  let maxRectangleDiagonal = 0;
  let maxRectangleArea = 0;

  for (let i = 0; i < dimensions.length; i++) {
    const length = dimensions[i][0];
    const width = dimensions[i][1];
    const diagonal = length * length + width * width;
    if (diagonal > maxRectangleDiagonal) {
      maxRectangleDiagonal = diagonal;
      maxRectangleArea = length * width;
    }
    if (diagonal === maxRectangleDiagonal) {
      maxRectangleArea = Math.max(length * width, maxRectangleArea);
    }
  }

  return maxRectangleArea;
};
