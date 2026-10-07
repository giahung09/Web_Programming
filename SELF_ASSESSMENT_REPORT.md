# Self-assessment — IA#1

Submitted by: `<student ID>` — `<full name>`

Total I claim: 92 / 100

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js`; `test/cart.test.js`: `the example from the slides`, `an empty cart has no VAT or shipping`, `shipping is free exactly at the subtotal threshold`, `a negative price throws RangeError`, and `a fractional quantity throws RangeError` |
| Tests | 20 | 20 | `test/cart.test.js` has nine separate behavior tests; `npm test` passes 9/9, including threshold, rounding, and invalid-quantity cases |
| Harness | 20 | 20 | `AGENTS.md` documents stack, commands, and prohibitions; `package.json` and `scripts/check-format.js` provide the format gate; `.github/workflows/ci.yml` runs checks on push; [successful CI run for commit `f90fb1a`](https://github.com/giahung09/Web_Programming/actions/runs/37588361794) |
| Brief | 15 | 15 | `BRIEF.md` specifies the files, `cartTotal` contract, error cases, no-dependency constraint, initial red test, and requested checks; it discloses that Codex proposed the wording |
| AI-LOG.md | 15 | 15 | `AI-LOG.md` records the tool, task, generated work, changes, rejections, and work done by hand. It was written after implementation, so I place it at the top of the rubric's 3–7 point band for an after-the-fact log. |

## What I did not manage

I did not write the AI-LOG entry as I worked; I reconstructed it after implementation. I have not recorded an independent line-by-line review or made hand-written source-code changes.

## What I would do differently

I would record the AI-LOG while working, including specific suggestions I reject, then review and explain the implementation and tests myself before packaging the submission.
