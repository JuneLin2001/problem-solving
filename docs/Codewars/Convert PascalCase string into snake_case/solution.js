function toUnderscore(string) {
  if (typeof string === "number") return string.toString();

  return string
    .replace(/([A-Z])/g, "_$1")
    .replace(/^_/, "")
    .toLowerCase();
}
