import fs from "node:fs";
import path from "node:path";

const LEETCODE_ROOT = "docs/LeetCode";

/** Resolve a full folder path, or a (parent dir +) name prefix, to one existing directory. */
function resolveProblemDir(input: string): string {
  if (fs.existsSync(input) && fs.statSync(input).isDirectory()) {
    return input;
  }

  const hasSlash = input.includes("/") || input.includes("\\");
  const parent = hasSlash ? path.dirname(input) : LEETCODE_ROOT;
  const prefix = hasSlash ? path.basename(input) : input;

  if (!fs.existsSync(parent)) {
    console.error(`No such directory: ${parent}`);
    process.exit(1);
  }

  const matches = fs
    .readdirSync(parent, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.startsWith(prefix))
    .map((entry) => path.join(parent, entry.name));

  if (matches.length === 1) return matches[0];

  if (matches.length === 0) {
    console.error(
      `No problem folder starting with "${prefix}" found in ${parent}`,
    );
  } else {
    console.error(
      `Multiple problem folders start with "${prefix}" in ${parent}:`,
    );
    matches.forEach((m) => console.error(`  ${m}`));
  }
  process.exit(1);
}

const inputArg = process.argv[2];
if (!inputArg) {
  console.error('Usage: npm run convert -- "<problem number, name, or path>"');
  process.exit(1);
}

const dir = resolveProblemDir(inputArg);

const srcPath = path.join(dir, "original.md");
const destPath = path.join(dir, "_Description.md");

const HTML_ENTITIES: Record<string, string> = {
  "&nbsp;": " ",
  "&lt;": "<",
  "&gt;": ">",
  "&amp;": "&",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
};

function decodeEntities(input: string): string {
  return input.replace(
    /&nbsp;|&lt;|&gt;|&amp;|&quot;|&#39;|&apos;/g,
    (entity) => HTML_ENTITIES[entity],
  );
}

function convertImgTag(tag: string): string {
  const src = /src="([^"]*)"/.exec(tag)?.[1] ?? "";
  const alt = /alt="([^"]*)"/.exec(tag)?.[1] ?? "";
  return `![${alt}](${src})`;
}

/**
 * Merge consecutive "Input:" / "Output:" / "Explanation:" lines (optionally
 * separated by blank lines, as LeetCode formats them either way) into one
 * blockquote block, e.g.:
 *   > **Input:** ...
 *   >
 *   > **Output:** ...
 *   >
 *   > **Explanation:**
 */
const EXAMPLE_LABEL_RE = /^(Input|Output|Explanation):(.*)$/;

/** True if the next non-blank line (starting at `from`) is an example label. */
function nextNonBlankIsLabel(lines: string[], from: number): boolean {
  let j = from;
  while (j < lines.length && lines[j].trim() === "") j++;
  return j < lines.length && EXAMPLE_LABEL_RE.test(lines[j]);
}

function blockquoteExampleLabels(text: string): string {
  const lines = text.split("\n");
  const out: string[] = [];
  let inQuote = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = EXAMPLE_LABEL_RE.exec(line);

    if (match) {
      const [, label, rest] = match;
      if (inQuote) out.push(">");
      out.push(
        rest.trim() ? `> **${label}:** ${rest.trim()}` : `> **${label}:**`,
      );
      inQuote = true;
      continue;
    }

    // A blank line only breaks the blockquote if what follows isn't another label.
    if (inQuote && line.trim() === "" && nextNonBlankIsLabel(lines, i + 1)) {
      continue;
    }

    inQuote = false;
    out.push(line);
  }

  return out.join("\n");
}

let text = fs.readFileSync(srcPath, "utf8").replace(/\r\n/g, "\n");

// Drop the leading "# [...](...)" title line (and the blank line after it).
const lines = text.split("\n");
if (lines[0] && lines[0].startsWith("# ")) {
  lines.shift();
  if (lines[0] === "") lines.shift();
}
text = lines.join("\n");

text = decodeEntities(text);

// Superscript/subscript, e.g. 10<sup>5</sup> -> 10^5
text = text.replace(/<sup>([\s\S]*?)<\/sup>/g, "^$1");
text = text.replace(/<sub>([\s\S]*?)<\/sub>/g, "$1");

// Bold / italic
text = text.replace(/<(?:strong|b)>([\s\S]*?)<\/(?:strong|b)>/g, "**$1**");
text = text.replace(/<(?:em|i)>([\s\S]*?)<\/(?:em|i)>/g, "*$1*");

// Inline code
text = text.replace(/<code>([\s\S]*?)<\/code>/g, "`$1`");

// Images
text = text.replace(/<img\b[^>]*>/g, convertImgTag);

// Lists
text = text.replace(/^[ \t]*<\/?(?:ul|ol)[^>]*>[ \t]*\n?/gm, "");
text = text.replace(/^[ \t]*<li>([\s\S]*?)<\/li>[ \t]*$/gm, "- $1");

// <pre> blocks: example bodies stay as plain text (handled below), anything
// else becomes a fenced code block.
text = text.replace(/<pre>([\s\S]*?)<\/pre>/g, (_, inner: string) => {
  const trimmed = inner.trim();
  return trimmed.startsWith("Input:") ? trimmed : "```\n" + trimmed + "\n```";
});

// Drop the example-block div wrapper tags.
text = text.replace(/^<div[^>]*class="example-block"[^>]*>[ \t]*\n?/gm, "");
text = text.replace(/^<\/div>[ \t]*\n?/gm, "");

// Any "**Label:**" line on its own (Example N, Constraints, Note, ...) -> heading
text = text.replace(/^\*\*(.+?):\*\*[ \t]*$/gm, "#### $1:");

// Input: / Output: / Explanation: -> one blockquote block
text = blockquoteExampleLabels(text);

// Collapse any resulting run of 3+ blank lines down to 1.
text = text.replace(/\n{3,}/g, "\n\n");

fs.writeFileSync(destPath, text.trim() + "\n", "utf8");
console.log(`Wrote ${destPath}`);
