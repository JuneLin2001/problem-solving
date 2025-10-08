function topThreeWords(text) {
  const counter = {};

  const words = text.toLowerCase().match(/\b[a-z']+\b/g);

  if (!words) return [];

  for (const word of words) {
    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  }

  return Object.entries(counter)
    .sort(([, a], [, b]) => b - a)
    .slice(0, Math.min(3, Object.keys(counter).length))
    .map(([key]) => key);
}
