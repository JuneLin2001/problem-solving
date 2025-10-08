function firstNonRepeatingLetter(s) {
  const counter = {};
  const lowerStr = s.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    if (counter[lowerStr[i]]) {
      counter[lowerStr[i]]++;
    } else {
      counter[lowerStr[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (counter[lowerStr[i]] === 1) {
      return s[i];
    }
  }

  return "";
}
