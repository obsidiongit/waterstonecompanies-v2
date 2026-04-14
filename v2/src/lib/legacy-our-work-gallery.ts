import fs from "node:fs";
import path from "node:path";

/**
 * Reads category tags from the static-site `our-work/index.html` (sibling of `v2/`)
 * so filters stay aligned with the legacy gallery without hand-maintaining 200+ rows.
 */
export function readLegacyGalleryCategoryByFilename(): Map<string, string> {
  const map = new Map<string, string>();
  const htmlPath = path.join(process.cwd(), "..", "our-work", "index.html");
  if (!fs.existsSync(htmlPath)) return map;

  const html = fs.readFileSync(htmlPath, "utf8");
  const re =
    /data-gallery-item\s+data-category="([^"]+)"[^>]*data-lightbox-src="\.\.\/photos\/([^"]+)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const rawCats = m[1];
    const file = path.basename(m[2]);
    map.set(file, rawCats);
  }
  return map;
}
