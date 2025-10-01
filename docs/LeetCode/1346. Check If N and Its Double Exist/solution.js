/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const existSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (existSet.has(arr[i] * 2) || existSet.has(arr[i] / 2)) {
      return true;
    }

    existSet.add(arr[i]);
  }

  return false;
};
