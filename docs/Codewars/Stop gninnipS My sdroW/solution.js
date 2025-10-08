function spinWords(string) {
  const stringArr = string.split(" ");
  const result = [];

  for (let string of stringArr) {
    if (string.length >= 5) {
      result.push(string.split("").reverse().join(""));
    } else {
      result.push(string);
    }
  }

  return result.join(" ");
}
