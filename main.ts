// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is an X post, named in POST.json at the repository root.
// This program's only job is to copy that file into the output directory,
// exactly as the grader expects. The house reads the post itself from X;
// nothing written here is judged.
import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Resolve both sides to absolute paths so the copy behaves the same
// no matter which directory node was launched from.
const source = resolve(botDir, "POST.json");
const targetDir = resolve(outDir);

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, resolve(targetDir, "POST.json"));
