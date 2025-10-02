/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
  let bottlesDrunk = 0;
  let emptyBottles = 0;

  while (numBottles > 0) {
    bottlesDrunk += numBottles;
    emptyBottles += numBottles;
    numBottles = 0;

    while (emptyBottles >= numExchange) {
      emptyBottles -= numExchange;
      numExchange++;
      numBottles++;
    }
  }

  return bottlesDrunk;
};
