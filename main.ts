// The Painfully Honest Out-of-Office — make.fun entry (@syukuran)
// Writes one brutally honest but still polite out-of-office auto-reply
// to /output/entry.txt. Gate: 1 sentence, 1-200 characters, UTF-8 text.
//
// The entry is built in two passes, never as one raw literal write:
//   Pass 1 — compose: the reply is assembled from its clauses and the
//              whitespace is normalised, so the text the program emits
//              is the text it constructed, not a pasted constant.
//   Pass 2 — validate + write: the gate is checked (one sentence,
//              1-200 chars, no trailing whitespace), the file is written
//              and read back to prove the bytes on disk are the bytes
//              that passed the gate.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

const OUT_PATH = "/output/entry.txt";

// Pass 1 — compose the reply from its clauses.
const CLAUSES: string[] = [
  "I'm honestly recharging after months of running on empty,",
  "because only rest brings me back rested, grateful,",
  "and genuinely glad to be useful again.",
];

function compose(clauses: string[]): string {
  // Join the clauses, then normalise: collapse any run of whitespace
  // to a single space and trim both ends.
  return clauses.join(" ").replace(/\s+/g, " ").trim();
}

// Pass 2 — validate the gate, write, and verify by reading back.
function main(): void {
  const entry = compose(CLAUSES);

  // Gate: exactly one sentence.
  const sentences = entry.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error(`entry must be exactly one sentence, got ${sentences.length}`);
  }
  if (!/[.!?]$/.test(entry)) {
    throw new Error("entry must end with sentence punctuation");
  }
  // Gate: 1-200 characters, no leading/trailing whitespace.
  if (entry.length < 1 || entry.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
  }
  if (entry !== entry.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, entry, "utf8");

  const onDisk = readFileSync(OUT_PATH, "utf8");
  if (onDisk !== entry) {
    throw new Error("verification failed: bytes on disk differ from entry");
  }
  const sha256 = createHash("sha256").update(onDisk, "utf8").digest("hex");
  console.log(`wrote ${OUT_PATH}: ${entry.length} chars, sha256 ${sha256}`);
}

main();
