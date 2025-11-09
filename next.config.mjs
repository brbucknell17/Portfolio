const isProd = process.env.NODE_ENV === "production";
const repo = "portfolio"; // your repo name
export default {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
};

