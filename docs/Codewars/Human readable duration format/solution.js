function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const times = {
    year: Math.floor(seconds / (365 * 24 * 60 * 60)),
    day: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
    hour: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
    minute: Math.floor((seconds % (60 * 60)) / 60),
    second: seconds % 60,
  };

  const resultArr = [];

  for (let i in times) {
    if (times[i] > 0) {
      resultArr.push(`${times[i]} ${i}${times[i] > 1 ? "s" : ""}`);
    }
  }

  return resultArr.length > 1
    ? resultArr.slice(0, -1).join(", ") + " and " + resultArr.slice(-1)
    : resultArr[0];
}
