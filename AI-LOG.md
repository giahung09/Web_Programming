# AI-LOG — IA#1 (draft for student review)

- Date: 2026-10-07
- Tool: Codex desktop coding assistant
- Brief: `BRIEF.md` records the prompt sent by the student in this chat before implementation. Codex proposed the wording in the preceding exchange; the student chose to send it.

## What the assistant produced

- Created `AGENTS.md` with the actual stack, commands, conventions, and prohibitions for this repository.
- Added `npm run format:check` to `package.json` and `scripts/check-format.js`. The script checks JavaScript syntax, trailing whitespace, tabs, two-space indentation, and final newlines without external packages.
- Added `.github/workflows/ci.yml` to run the format check and tests on pushes and pull requests.
- Added focused behavior tests in `test/cart.test.js` for the worked example, empty cart, shipping threshold, paid shipping, whole-đồng rounding, negative price, and invalid quantities.
- Replaced the placeholder in `src/cart.js` with subtotal, VAT, shipping, rounding, and `RangeError` handling.
- Drafted this log and `SELF_ASSESSMENT_REPORT.md` for student review.

## Checks observed in this session

- Before any edits: `npm test` failed 1/1 test because `cartTotal` threw `Error: not implemented`.
- After adding the tests, before implementation: `npm test` failed 9/9 tests as expected.
- After implementation: `npm test` passed 9/9 tests; `npm run format:check` passed; `git diff --check` found no whitespace errors.
- Commit `d3a3f29` was pushed to `https://github.com/giahung09/Web_Programming` on branch `main` at the student's request. The GitHub Actions run at `https://github.com/giahung09/Web_Programming/actions/runs/37585701925` completed successfully.
- The student explicitly approved using the configured Git commit identity for this push.

## Changes and rejected ideas

- The assistant removed a redundant `typeof` assertion from the rounding test: the strict equality assertion already rejects a string result.
- The assistant used Node built-ins for the format gate instead of installing a formatter package, following the no-dependencies constraint.
- No other generated patch was rejected during this session.

## Student-authored and student-review section

- Student-provided input so far: the student sent the prompt in `BRIEF.md`, using wording proposed by Codex in the preceding exchange. No separately hand-written brief or code edits have been recorded.
- Student code edits, manual review findings, and suggestions rejected by the student: **not yet recorded**. Fill this section with what you actually did after reading the diff.
- Student's final explanation of the code and CI result: **to be completed after review**.
