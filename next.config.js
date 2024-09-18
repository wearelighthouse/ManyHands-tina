const prefix = process.env.PREFIX ?? undefined;
const output = process.env.OUTPUT ?? undefined;

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  basePath: prefix,
  assetPrefix: prefix ? `${prefix}/` : undefined,
  env: {
    prefix,
  },
  output: output === 'no' ? undefined : 'export',
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};
