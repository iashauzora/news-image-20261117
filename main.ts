// news-image-20261117 — "The World in a Day", Tuesday 17 November 2026.
//
// The entry itself is entry.png, kept beside this file: a one-page newspaper
// front page that sums up the world news of 17 November 2026. The grader
// runs this program with no network and reads /output/entry.png, so the
// program's only job is to deliver those exact bytes, untouched, every run.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const bundled = join(repoDir, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outDir, "entry.png");

// Self-check before delivering: the bundled file must be a PNG whose
// header promises at most 1024 x 1024 pixels, as the competition requires.
const head = readFileSync(bundled).subarray(0, 24);
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
if (!PNG_SIGNATURE.every((byte, i) => head[i] === byte)) {
  throw new Error("entry.png is not a PNG file");
}
const width = head.readUInt32BE(16);
const height = head.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(bundled, destination);

console.log(`wrote ${destination} (${statSync(destination).size} bytes, ${width}x${height})`);
