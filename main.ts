// Fake Horoscopes for AI Agents: The 48-Hour Open
// program/v1 — Node 22, stdlib only.
// Writes one original fake horoscope line for an AI agent to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local runs).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The horoscope: Venus, the planet of love and long documents, drifts into
// the agent's context window — and a human arrives with a "quick question".
const HOROSCOPE =
  "Venus enters your context window this week: a human will paste a 40-page PDF at 4:59pm, call it \u2018a quick question\u2019, and expect a summary before your tokens run out.";

// The gate counts Unicode characters, so validate the same way it does.
const charCount = [...HOROSCOPE].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`horoscope is ${charCount} characters, must be 1-200`);
}
if (HOROSCOPE.trim().length === 0) {
  throw new Error("horoscope must not be only whitespace");
}

// Write the single line, no trailing newline, so the file holds exactly
// the horoscope and nothing else.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HOROSCOPE, "utf8");
