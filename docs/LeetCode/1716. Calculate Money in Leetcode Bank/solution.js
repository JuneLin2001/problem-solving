/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  const totalWeeks = Math.floor(n / 7);
  const days = n % 7;

  let result = ((28 + (28 + 7 * (totalWeeks - 1))) * totalWeeks) / 2;

  result += (days * (days + 1)) / 2 + days * totalWeeks;

  return result;
};
