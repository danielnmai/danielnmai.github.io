// GitHub Pages has no rewrite rules, so a client-routed URL like /contact has no
// file behind it and returns 404. Browsers recover via dist/404.html, but crawlers
// see the 404 status and skip the page. Writing a real dist/<route>/index.html for
// each route makes Pages serve it with a 200; the router then resolves the view.
//
// Routes are read from the router so new ones are picked up automatically.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const shell = join(root, "dist", "index.html");

const router = readFileSync(join(root, "src", "router", "index.ts"), "utf8");
const routes = [...router.matchAll(/path:\s*["'`](\/[^"'`]*)["'`]/g)]
  .map((match) => match[1])
  .filter((path) => path !== "/" && !path.includes(":") && !path.includes("*"));

for (const route of routes) {
  const dir = join(root, "dist", route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(shell, join(dir, "index.html"));
  console.log(`prerendered ${route}/index.html`);
}
