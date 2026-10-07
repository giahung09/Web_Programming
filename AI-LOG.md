# AI-LOG.md

## 2026-10-07 — IA#1 `cartTotal` implementation and submission records

**Tool:** Codex desktop coding assistant

**Asked for:** Run the starter test before edits, add project rules and no-dependency format/CI checks, implement the README contract in `src/cart.js`, add focused tests, inspect the diffs, and prepare the submission records.

**Kept:** I kept Codex's `AGENTS.md`, `src/cart.js`, `test/cart.test.js` (nine behavior tests), `scripts/check-format.js`, the `format:check` script in `package.json`, `.github/workflows/ci.yml`, `BRIEF.md`, and the report drafts. Final `npm test` passed 9/9, `npm run format:check` passed, and the [CI run for commit `f90fb1a`](https://github.com/giahung09/Web_Programming/actions/runs/37588361794) passed.

**Changed:** During implementation, Codex removed a redundant `typeof` assertion because strict equality already checks the result type, then aligned the report drafts with the Classroom templates.

**Rejected:** I did not reject an implementation or prompt suggestion in this task, so there is no discarded AI patch to list.

**By hand:** I summarized the key requirements and ideas for Codex. Codex proposed the final wording recorded in `BRIEF.md`, and I sent it as the instruction. I did not write JavaScript source code by hand.
