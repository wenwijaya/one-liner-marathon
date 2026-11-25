// One-Liner Marathon — one comedy joke, at most 280 characters, any subject.
// program/v1 (Node 22+, standard library only). The program writes the single
// line to /output/entry.txt and exits 0.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const line =
  'My smart fridge just filed a complaint: I open it at 3am, stare into the light like it owes me answers, and leave with nothing but pickles and regret.';

if (line.length > 280 || line.trim().length === 0) {
  throw new Error('entry line must be 1-280 non-blank characters');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line + '\n', 'utf8');
