/** @type {import('next').NextConfig} */
import * as path from "path";

const __dirname = path.resolve();
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "assests/theme")],
  },
};

export default nextConfig;
