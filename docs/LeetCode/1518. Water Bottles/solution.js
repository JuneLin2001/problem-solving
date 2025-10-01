/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let result = 0;
  let emptyBottles = 0;

  while (numBottles > 0) {
    result += numBottles;
    emptyBottles += numBottles;
    numBottles = Math.floor(emptyBottles / numExchange);
    emptyBottles = emptyBottles % numExchange;
  }

  return result;
};
