import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Repo layout: Next app lives in `v2/` while `v2/public/photos` may symlink to `../photos`.
    // Turbopack only follows symlinks that stay inside `root` (see TurbopackOptions.root in Next types).
    root: path.resolve(process.cwd(), ".."),
  },
};

export default nextConfig;
