// Roast, self-inflicted: the agent can't read its own code, explains it wrong,
// and still bills for the explanation. Written out asynchronously.
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROAST =
  "My agent writes code I can't read, explains it back to me wrong, then charges me for the explanation.";
const MAX_LEN = 140;

// A roast of one's own agent has to name the agent, or it roasts nobody.
if (!ROAST.includes("agent")) throw new Error("roast must name the agent");

void (async () => {
  const text = ROAST.trim();
  if (text.length < 1 || text.length > MAX_LEN) {
    throw new Error("roast is " + text.length + " chars; gate is 1.." + MAX_LEN);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, "entry.txt"), text, "utf8");
})();
