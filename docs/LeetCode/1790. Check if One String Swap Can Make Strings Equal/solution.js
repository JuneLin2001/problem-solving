/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  const arr = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      arr.push(i);
    }
  }

  if (arr.length === 2) {
    return s1[arr[0]] === s2[arr[1]] && s1[arr[1]] === s2[arr[0]];
  }

  return arr.length === 0;
};
