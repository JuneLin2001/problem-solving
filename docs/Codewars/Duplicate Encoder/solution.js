function duplicateEncode(word) {
  const counter = {};
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (counter[word[i]] >= 1) {
      counter[word[i]] += 1;
    } else {
      counter[word[i]] = 1;
    }
  }

  result = "";

  for (let i = 0; i < word.length; i++) {
    result += counter[word[i]] === 1 ? "(" : ")";
  }

  return result;
}
