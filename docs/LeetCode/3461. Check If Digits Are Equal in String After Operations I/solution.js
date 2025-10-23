/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
  while (s.length >= 3) {
    temp = "";

    for (let i = 0; i < s.length - 1; i++) {
      temp += ((parseInt(s[i]) + parseInt(s[i + 1])) % 10).toString();
    }

    s = temp;
  }

  return s[0] === s[1];
};
