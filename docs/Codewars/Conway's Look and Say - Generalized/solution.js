function lookSay(number) {
  const numStr = number.toString();
  let result = "";
  let count = 1;

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === numStr[i + 1]) {
      count++;
    } else {
      result += count.toString() + numStr[i];
      count = 1;
    }
  }

  return parseInt(result, 10);
}
