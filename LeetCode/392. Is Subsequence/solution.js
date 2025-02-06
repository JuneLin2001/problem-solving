/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let pointerS = 0;
  let pointerT = 0;

  if (s.length === 0) return true;

  while (pointerT <= t.length) {
    if (s[pointerS] === t[pointerT]) {
      pointerS++;
    }
    if (pointerS >= s.length) {
      return true;
    }
    pointerT++;
  }
  return false;
};
