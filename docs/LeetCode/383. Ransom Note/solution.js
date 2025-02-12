/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let counter = {};

  for (let i = 0; i < magazine.length; i++) {
    if (counter[magazine[i]]) {
      counter[magazine[i]]++;
    } else {
      counter[magazine[i]] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (counter[ransomNote[i]]) {
      counter[ransomNote[i]]--;
    } else {
      return false;
    }
  }

  return true;
};
