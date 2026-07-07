/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
  const arrN = Array.from(String(n), Number);
  const noZeros = arrN.filter((num) => num !== 0);
  const noZerosString = noZeros.join("");

  let sumOfNoZeros = noZeros.reduce((acc, curr) => acc + curr, 0);

  return noZerosString * sumOfNoZeros;
};
