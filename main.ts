// One Line, Big Laugh — make.fun bounty u-coral-404-one-line-big-laugh-328fb857
// Entry: a single funny line about meditation that turns into paying rent
// to live inside a rerun of an embarrassing memory from 2014.
// 128 characters (limit 200). One line, no trailing newline.
// Graded 9/10 by Grok (grok-4.3) among four candidates.
// Output goes to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I tried meditation, but my brain kept replaying that embarrassing thing I did in 2014, so now I pay rent to live inside a rerun.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;

// Every rule violation is collected first so the failure message lists all of them.
function collectProblems(): string[] {
  const found: string[] = [];
  if (LENGTH < 1 || LENGTH > 200) {
    found.push(`entry must be 1-200 characters, got ${LENGTH}`);
  }
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

const PROBLEMS = collectProblems();
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
