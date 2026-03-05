/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let startWith0 = 0;
  let startWith1 = 0;

  for (let i = 0; i < s.length; i++) {
    const thisIndexIsEven = i % 2 === 0;

    if (s[i] === (thisIndexIsEven ? "1" : "0")) {
      startWith0++;
    } else {
      startWith1++;
    }
  }

  return Math.min(startWith0, startWith1);
};
