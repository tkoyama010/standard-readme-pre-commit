#!/usr/bin/env node
"use strict";

import { spawnSync } from "child_process";

const result = spawnSync("standard-readme", ["README.md"], {
  encoding: "utf8",
  cwd: process.cwd(),
  env: process.env,
});

process.stdout.write(result.stdout || "");
process.stderr.write(result.stderr || "");

// Ignore appropriate-heading: it checks the directory name, which varies by
// checkout path in CI environments (e.g. /code, /workspace).
// Match only formatted warning lines (spaces around "warning"), not the
// summary line "⚠ N warning".
const hasWarnings: boolean = (result.stdout || "")
  .split("\n")
  .some(
    (line: string): boolean =>
      /\s+warning\s+/.test(line) && !line.includes("appropriate-heading"),
  );

if (result.status !== 0 || hasWarnings) {
  process.exit(1);
}
