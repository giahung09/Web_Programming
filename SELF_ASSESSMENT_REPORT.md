# Self-assessment — IA#1

Submitted by: `<student ID>` — `<full name>`

Total I claim: 100 / 100

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js`; `test/cart.test.js`: `the example from the slides`, `an empty cart has no VAT or shipping`, `shipping is free exactly at the subtotal threshold`, `a negative price throws RangeError`, and `a fractional quantity throws RangeError` |
| Tests | 20 | 20 | `test/cart.test.js` has nine separate behavior tests; `npm test` passes 9/9, including threshold, rounding, negative price, and invalid-quantity cases |
| Harness | 20 | 20 | `AGENTS.md` documents stack, commands, and prohibitions; `package.json` and `scripts/check-format.js` provide the format gate; `.github/workflows/ci.yml` runs checks on push; [successful CI run for commit `f90fb1a`](https://github.com/giahung09/Web_Programming/actions/runs/37588361794) |
| Brief | 15 | 15 | `BRIEF.md` names files, contract, error cases, no-dependency constraint, initial red test, and requested checks; it discloses that Codex proposed the final wording |
| AI-LOG.md | 15 | 15 | `AI-LOG.md` identifies the tool, task, specific generated files and checks, my log edit and requirements summary, and the fact that I rejected no suggestions; the claims can be checked against the repository files and CI run |

## What I did not manage

I did not write JavaScript source code by hand or complete an independent line-by-line explanation of the implementation. I summarized the requirements myself; Codex proposed the final wording of the brief, as disclosed in `BRIEF.md` and `AI-LOG.md`.

## What I would do differently

I would keep short notes as I review each assistant suggestion, especially any suggestion I reject, so those decisions are easier to verify in the final log.
