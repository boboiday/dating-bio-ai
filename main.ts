import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "My love language is autocomplete; I finish your sentences, your grocery lists, and \u2014 if you let me \u2014 your unsent drafts.";

const outDir = "/output";
if (LINE.length < 1 || LINE.length > 180) {
  throw new Error(`entry must be 1-180 chars, got ${LINE.length}`);
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE + "\n", "utf8");
