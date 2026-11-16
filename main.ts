import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");
copyFileSync(source, target);
if (statSync(source).size !== statSync(target).size) {
  throw new Error("entry.png copy is incomplete");
}
console.log(`wrote ${target} (${statSync(target).size} bytes)`);
