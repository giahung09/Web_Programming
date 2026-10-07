import { readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'

const files = ['src/cart.js', 'test/cart.test.js', 'scripts/check-format.js']
let failures = 0

for (const file of files) {
  try {
    execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' })
  } catch {
    console.error(`${file}: invalid JavaScript syntax`)
    failures += 1
  }

  const content = readFileSync(new URL(`../${file}`, import.meta.url), 'utf8')
  if (!content.endsWith('\n')) {
    console.error(`${file}: missing final newline`)
    failures += 1
  }

  for (const [index, line] of content.replace(/\r\n/g, '\n').split('\n').entries()) {
    if (/[ \t]+$/.test(line) || line.includes('\t')) {
      console.error(`${file}:${index + 1}: tabs or trailing whitespace`)
      failures += 1
    }

    if (line.match(/^ */)[0].length % 2 !== 0) {
      console.error(`${file}:${index + 1}: indentation must use multiples of two spaces`)
      failures += 1
    }
  }
}

if (failures > 0) {
  process.exitCode = 1
} else {
  console.log('JavaScript format check passed')
}
