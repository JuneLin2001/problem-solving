/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let result = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const currentX = points[i][0];
    const currentY = points[i][1];
    const targetX = points[i + 1][0];
    const targetY = points[i + 1][1];
    const distanceX = Math.abs(currentX - targetX);
    const distanceY = Math.abs(currentY - targetY);

    result += Math.max(distanceX, distanceY);
  }

  return result;
};
